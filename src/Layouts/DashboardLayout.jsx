import React from 'react'
import DashboardMainLayout from '../Dashboard/DashboardMainLayout'
import DashBoardSideLayout from '../Dashboard/DashboardSideLayout'
// import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex '>
        <DashBoardSideLayout/>
        
        < DashboardMainLayout/>
    </div>
  )
}

export default DashboardLayout
