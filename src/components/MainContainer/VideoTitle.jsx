import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[25%] pl-15 absolute bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='font-bold text-2xl text-white'>{title}</h1>
      <div className='w-75 pt-2 text-white'>{overview}</div>
      <div className='flex mt-5'>
        <button className='bg-gray-500 px-6 py-1 mr-2 rounded-lg flex align-middle bg-white opacity-80'><span className='pt-[2px] pr-0.5'>▶️ </span>play</button>
        <button className='bg-gray-500 px-5 py-1 rounded-lg text-white opacity-80'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle