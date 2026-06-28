import logo from '../assets/logo.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="FloraVision" />
            <span>FloraVision.</span>
          </div>
          <p className="footer-tagline">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to freshen and elevate your living environment."
          </p>
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="Facebook">FB</a>
            <a href="#" className="social-link" aria-label="Twitter">TW</a>
            <a href="#" className="social-link" aria-label="LinkedIn">LI</a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Quick Link's</h4>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Types Of plant's</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">For Every Update.</h4>
          <div className="footer-subscribe">
            <input type="email" placeholder="Enter Email" className="footer-email-input" />
            <button className="footer-subscribe-btn">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Zishan Shams © All right reserved</span>
      </div>
    </footer>
  )
}

export default Footer
