import { topDestinations , travelPackages} from '../helper-links/Data';
import Header from '../elements/Header';
import Footer from '../elements/Footer';

import React, { useState } from 'react'
import '../index.css'
import headerImg from '../assets/headerImg9.jpg'
import { IoSearch } from "react-icons/io5";
import topDestinationImg from "../assets/img7.jpg"
import Cards from '../elements/Card';


const Home = () => {

 
  return (
    <>
        {/* Main container */}
        <div className=' flex flex-col p-1 h-100vh w-80%' style={{
            backgroundColor:"whitesmoke",
        }}>

            < Header/>

            {/* search bar conatainer */}
            <div className=' relative flex flex-col justify-center items-center w-[95%] h-[40vh] ml-auto mt-4 mr-auto md:w-[85%] md:h-[50vh] lg:w-[80%] lg:h-[60vh]' style={{
                background:`url(${headerImg})`,
                backgroundSize:"cover",
                backgroundPositionX:"50%",
                backgroundPositionY:"50%",
                backgroundPositon:"center",
                borderRadius:"8px"          
                }}>
                {/* <div className='flex justify-center items-center border bg-white p-[8px] rounded-xl'>
                    <input className='w-64 p-1  placeholder-gray-500 text-gray-700 focus:outline-none focus:border-blue-500' type="search" placeholder='Search for Places, Destination and Hotels.' />
                    <img className='h-8 rounded-full' src={searchIcon} style={{
                        background:"none"
                    }} />
                </div> */}

                <div className="h-[12%] lg:w-[39%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white flex justify-center items-center gap-2 p-1 md:p-4 rounded-lg">
                            <input
                            className="h-[90%] w-[80%] lg:w-[90%] border-none outline-none text-xs sm:text-sm md:text-base lg:text-lg"
                            placeholder="Search Your Places, Destination..."
                            type="text"
                            />
                            <div className="h-5 w-5 sm:h-7 sm:w-7 md:h-10 md:w-10 lg:h-11 lg:w-11 flex items-center justify-center bg-blue-600 rounded-full cursor-pointer">
                            <IoSearch
                                className="lg:flex xs:hidden hidden"
                                size={22}
                                color="white"
                            />
                            <IoSearch
                                className="md:flex lg:hidden hidden"
                                size={18}
                                color="white"
                            />
                            <IoSearch
                                className="sm:flex md:hidden hidden"
                                size={16}
                                color="white"
                            />
                            <IoSearch className="flex sm:hidden" size={12} color="white" />
                            </div>
                        </div>
               
            </div>

            {/* cards container */}
            <div className='flex flex-col mt-14 w-[85%] ml-auto m-auto'>
                    <div className='flex align-center gap-2'>
                        <img src={topDestinationImg} alt="top destination img" 
                            className=' rounded-full h-10 w-10' />
                        <p className='font-bold mt-1 text-md '>Top Destinations</p>
                    </div>

                    <div>
                        <Cards data={topDestinations}  />
                    </div>

                    <div className='mt-10'>
                        <h1>TRAVEL PACKAGES</h1>
                        <Cards data={travelPackages}  />
                    </div>
            </div>

            {/* footer */}
            <div className='h-85 mt-14  w-[85%] ml-auto m-auto'>
                <Footer/>
            </div>

        </div>
    </>
  )
}

export default Home
