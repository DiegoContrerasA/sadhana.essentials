import { useMemo } from 'react'

const Button = ({ children, className = '', type = 'button', href, disabled, loading, ...props }) => {
  const [Component, internalProps] = useMemo(() => type === 'link' ? ['a', { href }] : ['button', { type }], [type, href])

  return (
    <Component disabled={disabled} {...props} {...internalProps} className={`bg-primaryText transition-all ease-in-out flex justify-center items-center font-bold rounded-md px-10 py-3 text-lg text-white duration-300 hover:bg-[#401649] ${className}`}>
      {loading ? 'Cargando ...' : children}
    </Component>
  )
}

export default Button
