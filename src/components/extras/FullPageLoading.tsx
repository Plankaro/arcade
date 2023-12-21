import React from 'react'

const FullPageLoading = () => {
  return (
    <div className=' fixed inset-0 backdrop-brightness-50 flex items-center justify-center z-50'>
      <div className=' bg-white p-4 rounded-md'>
        <h1 className=' text-2xl font-bold'>Loading...</h1>
      </div>
    </div>
  )
}

export default FullPageLoading
