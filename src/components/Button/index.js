const Button = ({ children, className, type = 'button', ...props }) => {
  return (
    <button {...props} type={type} className={`bg-primaryText font-bold rounded-md px-10 py-3 text-lg text-white hover: ${className}`}>
      {children}
    </button>
  )
}

export default Button
