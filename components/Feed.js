import React from 'react'
import InputBox from '../components/InputBox'


function Feed() {
  return (
    <div className='flex-grow h-screen pb-44 mr-4 x1:mr-40 overflow-y-auto'>
        <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
        <InputBox/>
        </div>
    </div>
  )
}

export default Feed