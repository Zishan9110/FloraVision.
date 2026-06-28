import { useCallback } from 'react'
import Button from './Button.jsx'
import Slider from './Slider.jsx'
import heroBg from '../assets/second.png'
import './HeroBanner.css'

const featuredSlides = [
  { tag: 'Indoor Plant',  name: 'Aglaonema plant',    imageKey: 'featured' },
  { tag: 'Desk Plant',    name: 'Sansevieria plant',   imageKey: 'featured' },
  { tag: 'Air Purifier',  name: 'Swiss Cheese Plant',  imageKey: 'featured' },
]

function HeroBanner({ heroPlantImage, featuredPlantImage }) {
  const renderFeaturedSlide = useCallback((slide) => (
    <div className="hfc-slide">
      <div className="hfc-image">
        <img src={featuredPlantImage} alt={slide.name} />
      </div>
      <div className="hfc-info">
        <span className="hfc-tag">{slide.tag}</span>
        <div className="hfc-title-row">
          <h3>{slide.name}</h3>
          <button className="hfc-arrow">›</button>
        </div>
        <button className="hfc-buy-btn">Buy Now</button>
      </div>
    </div>
  ), [featuredPlantImage])

  return (
    <section className="hero">
      {/* Full-bleed background bush image */}
      <div className="hero-bg-image">
        <img src={heroBg} alt="" aria-hidden="true" />
      </div>
      {/* Dark overlay gradients for readability */}
      <div className="hero-bg-overlay" />

      <div className="hero-inner">
        {/* LEFT — title + cta + testimonial */}
        <div className="hero-content">
          <h1 className="hero-title">Earth's Exhale</h1>
          <p className="hero-desc">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
            environment and its essential role in sustaining life.
          </p>
          <div className="hero-cta">
            <Button variant="primary">Buy Now</Button>
            <button className="btn-play">
              <span className="play-icon">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
              </span>
              Live Demo...
            </button>
          </div>

          <div className="hero-testimonial">
            <div className="ht-avatar" style={{ backgroundColor: '#c97b4b' }}>R</div>
            <div className="ht-content">
              <div className="ht-name-row">
                <span className="ht-name">Ronnie Hamill</span>
                <div className="ht-stars">★★★★☆</div>
              </div>
              <p className="ht-text">
                I can't express how thrilled I am with my new natural plants! They bring
                such a fresh and vibrant energy to my home.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — glass product card with overflowing plant image */}
        <div className="hero-featured-card">
          <Slider
            slides={featuredSlides}
            renderSlide={renderFeaturedSlide}
            autoplayDelay={3500}
            showDots={true}
            showArrows={false}
            className="hfc-slider"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroBanner