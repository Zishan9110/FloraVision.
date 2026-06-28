import { useState, useEffect, useRef, useCallback } from 'react'
import './Slider.css'

function Slider({
  slides = [],
  autoplayDelay = 3500,
  renderSlide,
  showDots = true,
  showArrows = false,
  className = '',
}) {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)
  const total = slides.length

  const goTo = useCallback((index) => {
    if (isTransitioning || index === current) return
    setIsTransitioning(true)
    setCurrent((index + total) % total)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning, current, total])

  const next = useCallback(() => goTo((current + 1) % total), [goTo, current, total])
  const prev = useCallback(() => goTo((current - 1 + total) % total), [goTo, current, total])

  // Autoplay
  useEffect(() => {
    if (isPaused || total <= 1) return
    timerRef.current = setInterval(next, autoplayDelay)
    return () => clearInterval(timerRef.current)
  }, [isPaused, next, autoplayDelay, total])

  // Touch / swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? next() : prev()
    }
    touchStartX.current = null
    touchStartY.current = null
  }

  if (!slides.length) return null

  return (
    <div
      className={`slider-root ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="slider-track">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slider-slide ${i === current ? 'active' : ''}`}
            aria-hidden={i !== current}
          >
            {renderSlide(slide, i, i === current)}
          </div>
        ))}
      </div>

      {showArrows && total > 1 && (
        <>
          <button className="slider-arrow slider-arrow--prev" onClick={prev} aria-label="Previous">‹</button>
          <button className="slider-arrow slider-arrow--next" onClick={next} aria-label="Next">›</button>
        </>
      )}

      {showDots && total > 1 && (
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Slider