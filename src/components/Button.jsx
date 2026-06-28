import './Button.css'

function Button({ children, variant = 'primary', onClick, className = '', type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
