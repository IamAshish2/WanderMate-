import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardMainLayout = () => {
  return (
        <div className='h-full w-full flex flex-[2.7] bg-white'>
             <Outlet/>
        </div>  
  )
}

export default DashboardMainLayout
