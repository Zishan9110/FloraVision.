import './PlantCard.css'

function StarRating({ rating = 4, max = 5 }) {
  return (
    <div className="star-rating">
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  )
}

function PlantCard({ image, title, description, price, rating = 4 }) {
  return (
    <div className="plant-card">
      <div className="pc-image">
        {image && <img src={image} alt={title} />}
      </div>
      <div className="pc-body">
        <StarRating rating={rating} />
        <h3 className="pc-title">{title}</h3>
        <p className="pc-desc">{description}</p>
        <div className="pc-footer">
          <span className="pc-price">{price}</span>
          <button className="pc-cart-btn" aria-label="Add to cart">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlantCard
