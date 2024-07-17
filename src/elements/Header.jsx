import React from 'react'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { landingHeaderLinks,headerLinks } from '../helper-links/Data';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import profileImg from '../assets/userProfile.jpg'

// const Header = () => {
//     const [open,setOpen] = useState(false)
//   return (
//     <>
//         {/* nav bar container */}
//         {/* <div className='h-16  flex justify-center items-center '>
//                 <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center">
//                     <RxHamburgerMenu
//                         size={25}
//                         className="cursor-pointer block  md:hidden "
//                         onClick={() => {
//                         setOpen(!open);
//                         }}/> 
//                 </div>
//                 <div className=''>
//                         <img className=' h-10 w-12 rounded-full' src={profileImg} alt="profile image" />
//                 </div>
//             </div> */}

// <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center">
//           <RxHamburgerMenu
//             size={25}
//             color="white"
//             className="cursor-pointer sm:hidden"
//             onClick={() => {
//               setOpen(!open);
//             }}
//           />
//           <Link
//             to="/signup"
//             className="sm:flex hidden pl-4 md:pl-8 text-orange-600 font-bold text-2xl lg:text-4xl hover:cursor-pointer"
//             style={{ textShadow: "4px 4px 4px rgba(0, 0, 0, 0.4)" }}
//           >
//             WanderMate.
//           </Link>

//           <div className="hidden sm:flex h-full w-full items-center justify-center gap-9 lg:gap-14">
//             {landingHeaderLinks.slice(0, 4).map((item) => (
//               <div 
//               key={item.id}>
//                 <Link
//                     key={item.id}
//                   to={item.link}
//                   className="text-base text-black md:text-md md:font-medium lg:text-xl hover:border-b-4 hover:border-b-yellow-500"
//                 >
//                   {item.title}
//                 </Link>
//               </div>
//             ))}
//           </div>
          
//           <img
//             className="h-13 w-13 rounded-full " 
//             src={profileImg}
//             alt="image"
//           />

//                   {/* side menu */}
//          {/* side menu */}
//         
//         </div>
//     </>
//   )
// }

const Header = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className="h-[10vh] w-full pl-4 sm:pl-6 md:pl-8 flex justify-between items-center relative">
    <RxHamburgerMenu
      size={26}
      color="black"
      className="cursor-pointer block md:hidden"
      onClick={() => {
        setOpen(!open);
      }}/>

       <motion.div
            initial={{ x: open ? 600 : 0 }}
            animate={{ x: open ? 0 : 600 }}
            transition={{ duration: 0.15 }}
            className={`
              h-screen w-[40%] sm:hidden fixed top-0 right-0 bg-white z-50 rounded-lg`}
          >
            {landingHeaderLinks.map((item) => (
              <div key={item.id}>
                <Link
                  className="flex justify-around  font-bold text-gray-600 text-lg pl-4 py-3
                  cursor-pointer hover:bg-gray-100 hover:rounded-lg"
                  key={item.id}
                  to={item.link}
                >
                  {item.title}
                </Link>
              </div>
            ))}
        </motion.div>

    <img
      className="h-10 w-10 object-cover rounded-full absolute right-4 top-1/2 transform -translate-y-1/2" 
      src={profileImg}
      alt="image"
    />
    <div className="absolute left-8 top-4 hidden md:block">
      <a href="/SignUp">
      <h1 className="text-4xl font-bold text-blue-600">WanderMate</h1>
      </a>
    </div>
    <div className="flex-1 flex justify-center items-center gap-4">
      {headerLinks.map((links) => (
        <Link
          key={links.link}
          className="p-4 font-bold text-blue hidden md:block text-lg hover:border-b-2 cursor-pointer"
          to={links.link}
        >
          {links.linkTitle}
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Header

