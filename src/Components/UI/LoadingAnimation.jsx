import React from 'react'
import { OrbitProgress, ThreeDot } from 'react-loading-indicators'

const LoadingAnimation = ({color="skyblue" , variant="track-disc" , size="large"}) => {

  return (
    <div className='absolute top-0 left-0 flex items-center justify-center h-full w-full z-10 bg-gray-800/20 backdrop-blur-md'>
        <OrbitProgress variant={variant} color={color} size={size} text="" textColor="" />
    </div>
  )
}

export default LoadingAnimation