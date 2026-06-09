import React from 'react'

const InfoPopUp = ({className , children}) => {
  return (
    <div className={`absolute bg-gray-300 dark:bg-gray-800 px-3 py-2 z-50 rounded-xl border border-gray-400 dark:border-gray-600 w-52 shadow-lg ${className}`}>
      <p className='text-gray-700 dark:text-gray-300 text-xs'>{children}</p>
    </div>
  )
}

export default InfoPopUp