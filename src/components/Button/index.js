import { useMemo } from 'react'

const Button = ({ children, className = '', type = 'button', href, ...props }) => {
  const [Component, internalProps] = useMemo(() => type === 'link' ? ['a', { href }] : ['button', { type }], [type, href])

  return (
    <Component {...props} {...internalProps} className={`bg-primaryText flex justify-center items-center font-bold rounded-md px-10 py-3 text-lg text-white ${className}`}>
      {children}
    </Component>
  )
}

export default Button
