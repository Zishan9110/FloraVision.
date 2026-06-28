import './SectionTitle.css'

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2 className="st-heading">
        <span className="st-bracket">|</span>
        {title}
        <span className="st-bracket">|</span>
      </h2>
      {subtitle && <p className="st-sub">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
