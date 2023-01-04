import React from 'react'

const Banner = () => {
  return (
    <div className='h-[300px] bg-banner bg-cover py-5'>
      <div className='flex flex-col gap-10 px-10 py-10'>
        <div className='text-white'>
        <h1 className='font-bold text-5xl'>Welcome.</h1>
        <h2 className='font-semibold text-[2rem] leading-1'>Millions of movies, TV shows and people to discover. Explore now.</h2>
        </div>
      </div>
    </div>
  )
}

export default Banner