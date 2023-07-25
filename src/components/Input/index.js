const Input = ({ label, placeholder, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className='block mb-1 text-md text-primaryText font-bold'>{label}</label>
      <input
        type='text' id={id} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-100 focus:border-red-100 block w-full px-2.5 py-4
               ' placeholder={placeholder}
        {...props}
      />
    </div>
  )
}

export default Input
