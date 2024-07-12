import React from 'react'
import '../index.css'
import bgimg from '../assets/undraw_signup.svg' 
const Signup = () => {
  return (
    <>
    <div className='h-screen w-full flex justify-center items-center '>
        <div className='h-full w-full sm:h-[80%] sm:w-[80%] grid sm:grid-cols-2 '
            style={{boxShadow:"20px 20px 20px #DEDEDE)"}}>
            
            <div className='flex justify-center'>
                <div className='flex  flex-col justify-center text-center'>

                    <p className='font-bold text-2xl text-blue-700 mb-4 '>Sign Up</p>
                    <form className='flex flex-col gap-4' action="">
                        <input className='signup-input' type="text" placeholder='Username' />
                        <input className='signup-input' type="text" placeholder='Email'/>
                        <input className='signup-input' type="text"placeholder='Password' />
                        <input className='signup-input' type="text" placeholder='Confirm Password' />
                    </form>

                    <button className='bg-blue-800 mt-5 p-2 text-white font-bold rounded-md' type='submit'>Sign Up</button>
                    
                    <div className='flex  gap-[4px] mt-2 justify-center'>
                        <input type="checkbox" />
                        <p>I agree to all <span className='text-blue-700'>Terms and Conditions</span></p>
                    </div>
                </div>
              
            </div>
            <div className='flex flex-col justify-center text-center gap-4 mt-12'>
                <img src={bgimg} alt="gym image"  />
                <p>Already a Member? <span className='text-blue-700'><a href="/Signin">Sign In</a></span></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup