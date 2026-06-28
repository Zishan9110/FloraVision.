import { useCallback } from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroBanner from '../components/HeroBanner.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import PlantCard from '../components/PlantCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import Slider from '../components/Slider.jsx'
import { trendyPlants, topSellingPlants, testimonials } from '../data/plants.js'
import second from '../assets/seconds.png'
import third from '../assets/third.png'
import fifth from '../assets/fifth.png'
import sixth from '../assets/sixth.png'
import seventh from '../assets/seventh.png'
// import backgroungImg from '../assets/fa0765984e44f85e1a04562f820f1492949a1257.jpg'
import './Home.css'

const o2Slides = [
  {
    image: seventh,
    title: "We Have Small And Best O2 Plants Collection's",
    desc1: 'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',
    desc2: 'Many plants can help filter air pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.',
  },
  {
    image: fifth,
    title: "Fresh Air With Indoor Cactus Plants",
    desc1: 'Cacti are surprisingly effective at improving indoor air quality. Their hardy nature makes them perfect for any environment, even those with little light.',
    desc2: 'These low-maintenance plants store water efficiently and can survive in a wide range of conditions, making them ideal for busy plant lovers.',
  },
  {
    image: sixth,
    title: "Swiss Cheese Plant — Nature's Air Filter",
    desc1: 'The Monstera deliciosa is renowned for its ability to purify indoor air while adding a dramatic tropical flair to any space.',
    desc2: 'Its large, perforated leaves maximise surface area for oxygen production, making it one of the most effective O2 plants available.',
  },
]

function Home() {
  const renderO2Slide = useCallback((slide, i, isActive) => (
    <div className="o2-slide">
      <div className="o2-card-image">
        <img src={slide.image} alt={slide.title} />
      </div>
      <div className="o2-card-content">
        <h3>{slide.title}</h3>
        <p>{slide.desc1}</p>
        <p>{slide.desc2}</p>
      </div>
    </div>
  ), [])

  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <HeroBanner
        heroPlantImage={second}
        featuredPlantImage={third}
      />

      {/* Trendy Plants Section */}
      <section className="section trendy-section">
        <SectionTitle title="Our Trendy plants" />
        <div className="trendy-list">
          {trendyPlants.map((plant) => (
            <div
              key={plant.id}
              className={`trendy-card ${plant.layout === 'left' ? 'trendy-card--left' : 'trendy-card--right'}`}
            >
              <div className="trendy-card-image">
                <img src={plant.image} alt={plant.title} />
              </div>
              <div className="trendy-card-content">
                <h3>{plant.title}</h3>
                <p>{plant.description}</p>
                <span className="trendy-price">{plant.price}</span>
                <div className="trendy-actions">
                  <Button variant="outline">Explore</Button>
                  <button className="cart-icon-btn" aria-label="Add to cart">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                      <line x1="3" y1="6" x2="21" y2="6"/>
                      <path d="M16 10a4 4 0 01-8 0"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Selling Plants */}
      <section className="section top-selling-section">
        <SectionTitle title="Our Top Selling Plants" />
        <div className="plants-grid">
          {topSellingPlants.map((plant) => (
            <PlantCard
              key={plant.id}
              image={plant.image}
              title={plant.title}
              description={plant.description}
              price={plant.price}
              rating={plant.rating}
            />
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section reviews-section">
        <SectionTitle title="Customer Review" />
        <div className="reviews-grid">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              name={t.name}
              review={t.review}
              rating={t.rating}
              color={t.color}
            />
          ))}
        </div>
      </section>

      {/* Our Best O2 Section — functional slider */}
      <section className="section o2-section">
        <SectionTitle title="Our Best o2" />
        <div className="o2-card">
          <Slider
            slides={o2Slides}
            renderSlide={renderO2Slide}
            autoplayDelay={4000}
            showDots={true}
            showArrows={false}
            className="o2-slider"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
