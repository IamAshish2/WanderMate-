import React from 'react'
import img  from '../assets/bg8.jpg';
import {RxHamburgerMenu} from 'react-icons/rx';
import headerimg from '../assets/headerImg2.jpg';
import {useState } from 'react'
import {links} from '../javascript/links.js'





const LandingPage = () => {
  const [open,setOpen] = useState(false);

  return (
    <>
    {/* main container */}
    <div className='  flex flex-col justify-between h-screen w-full'
    style={{
      backgroundImage: `linear-gradient(rgba(10,10,10,0.9), rgba(10,10,10,0.5)), url(${img})`,
      backgroundSize:"cover",
      backgroundPosition:"center"
    }}>
      {/* header container */}
        <div className=' flex justify-between items-center pl-4 sm:pl-6 md:pl-8  h-[55px] w-full'>   
        <RxHamburgerMenu size={25} color="white"
        onClick={() => {
          setOpen(!open);
          
        }} />

        {/* side menu */}
          <div
            className={`${open ? 'opacity-100' : 'hidden opacity-0'}
             h-screen w-[60%] fixed top-0 right-0 transition-all
              duration-300 ease-in-out bg-black  z-50
              `}
          >
            <ul className='list-none text-white flex flex-col justify-center text-center gap-9 mt-20
            font-bold '>
              <li>About</li>
              <li>Tours</li>
              <li>Sale</li>
              <li>Contact</li>
            </ul>
          </div>


        <img style={{
          clipPath: "polygon(0 0, 100% 0, 100% 82%, 84% 100%, 0 61%)"
        }} className =' cursor-pointer z-10
                h-49 w-40 object-cover mt-4' src={headerimg} alt="header image" />
        </div>  

      {/* hero component */}
        <div className='flex justify-center text-center flex-col  '>
          <p className='text-white font-bold text-sm tracking-widest'>The country of Himalays</p>
          <p className='text-7xl font-bold '> 
              <span className='text-orange-500'>NEP</span>
              <span className='text-white '>AL</span>
          </p>
        </div>

      {/* footer */}
      <div className='  grid  grid-cols-2  '>
        <div>
          <p className='leading-6 font-bold pl-6 text-xs md:pl-12 pb-6 md:pd-12 text-white '>Visit Nepal, You will never <br/> regret it. <br />  
          This is something incredible, <br />fantastic, <br />mesmerizing and lifetime <br /> experience.</p>
        </div>

        <div className='ml-20'>
            <ul className='text-white text-sm  font-bold   '>
                <li className='flex gap-4 flex-wrap  w-[160px] mt-[89px]'>
                {links.map((linkItem) => (
                      <a href={linkItem.link} target="_blank">
                        {linkItem.name}
                      </a>
                  ))}
                </li>
            </ul>
        </div>
         
      </div>
    </div>
    </> 
  )
}

export default LandingPage
