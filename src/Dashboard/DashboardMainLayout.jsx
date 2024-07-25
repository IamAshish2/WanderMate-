import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardMainLayout = () => {
  return (
        <div className=' bg-white w-full h-full  p-0 ' >
             <Outlet/>
        </div>  
  )
}

export default DashboardMainLayout
