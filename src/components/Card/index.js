const Card = ({ text }) => {
  return (
    <div className='bg-[#9570a2] rounded-lg py-5 px-10'>
      <p className='text-xl md:text-2xl text-white font-bold'>{text}
      </p>
    </div>
  )
}

export default Card
