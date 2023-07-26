import { forwardRef } from 'react'

const Input = forwardRef(({ label, placeholder, id, error, ...props }, ref) => {
  return (
    <div>
      <label htmlFor={id} className='block mb-1 text-md text-primaryText font-bold'>{label}</label>
      <input
        ref={ref}
        type='text' id={id}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-100 focus:border-red-100 block w-full px-2.5 py-4 font-sans'
        placeholder={placeholder}
        {...props}
      />
      {Boolean(error) && <p className='text-sm text-red-900 font-bold'>*{error}</p>}
    </div>
  )
})

export default Input
