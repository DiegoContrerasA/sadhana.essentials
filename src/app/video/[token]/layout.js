const Layout = ({ children }) => {
  return (
    <div className='flex justify-center items-center min-h-full bg-accent bg-gradient-to-r from-[#28162b] to-[#4f2e55] py-10 px-5 flex-col'>
      <div className='w-full max-w-5xl shadow-sm'>
        {children}
      </div>
    </div>
  )
}

export default Layout
