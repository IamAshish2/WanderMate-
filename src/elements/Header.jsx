import React from 'react'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import profileImg from '../assets/userProfile.jpg'

const Header = () => {
    const [open,setOpen] = useState(false)
  return (
    <>
        {/* nav bar container */}
        <div className='h-16  flex justify-center items-center '>
                <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center">
                    <RxHamburgerMenu
                        size={25}
                        className="cursor-pointer block  md:hidden "
                        onClick={() => {
                        setOpen(!open);
                        }}/> 
                </div>
                <div className=''>
                        <img className=' h-10 w-12 rounded-full' src={profileImg} alt="profile image" />
                </div>
            </div>
    </>
  )
}

export default Header
