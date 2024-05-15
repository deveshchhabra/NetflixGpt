
const ViedoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='cursor-pointer text-black bg-white  p-4 mx-2 px-12  rounded-lg hover:bg-opacity-80 '>▶play</button>
        <button className='bg-gray-500 text-white p-4 mx-2 px-12 bg-opacity-50 rounded-lg'>More Info</button>

      </div>
    </div>
  )
}

export default ViedoTitle
