import './TestimonialCard.css'

function TestimonialCard({ name, review, rating = 4, color = '#e8a87c' }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2)

  return (
    <div className="testimonial-card">
      <div className="tc-header">
        <div className="tc-avatar" style={{ backgroundColor: color }}>
          {initials}
        </div>
        <div className="tc-meta">
          <span className="tc-name">{name}</span>
          <div className="tc-stars">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
            ))}
          </div>
        </div>
      </div>
      <p className="tc-review">{review}</p>
    </div>
  )
}

export default TestimonialCard
