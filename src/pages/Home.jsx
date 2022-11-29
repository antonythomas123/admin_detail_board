import React from 'react'
import AdminNav from '../components/adminNav/AdminNav'
import AdminView from '../components/adminView/AdminView'

function Home() {
  return (
    <div className='w-[100%] h-[100%]'>
        <AdminNav/>
        <div className='flex justify-center mt-[80px]'>
          <AdminView/>
        </div>
        
    </div>
  )
}

export default Home