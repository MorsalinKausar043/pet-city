import React from 'react'
import Navbar from './components/navbar/navbar'
import OwnerSitter from './components/home/OwnerSitter'

const page = () => {
  return (
    <>
      <main>
        <div className='w-full h-full flex justify-center items-center'>
          <h1>hello world this is Pet-City!</h1>
        </div>
        <div>
          <OwnerSitter/>
        </div>
      </main>
    </>
  )
}

export default page
