const Button = ({ children, className, ...props }) => {
  return (
    <button {...props} type='button' className={`bg-primaryText rounded-md px-10 py-3 text-lg text-white hover: ${className}`}>
      {children}
    </button>
  )
}

export default Button
