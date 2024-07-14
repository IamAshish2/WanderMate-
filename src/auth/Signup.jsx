import React from 'react'
import '../index.css'
import bgimg from '../assets/undraw_signup.svg' 
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { signUpSchema  } from '../validation/formValidation'



const Signup = () => {
    // const [formData,setFormData] = useState({
    //     username:"",
    //     email:""
    // });

    // const handleChange =(event) =>{
    //     const { name,value } = event.target;
    //     setFormData({
    //         //spread operator
    //         ...formData,
    //         [name]:value
    //     });
    //     console.log(formData);
    // }

    const {
        register,
        handleSubmit,
        formState:{errors},
    } = useForm({
        resolver:yupResolver(signUpSchema)
    });

    const onSubmit = (data) =>{
        console.log();
    }

  return (
    <>
    <div className='h-screen w-full flex justify-center items-center '>
        <div className='h-full w-full sm:h-[80%] sm:w-[80%] grid sm:grid-cols-2 '
            style={{boxShadow:"20px 20px 20px #DEDEDE)"}}>
            
            <div className='flex justify-center'>
                <div className='flex  flex-col justify-center text-center'>

                    <p className='font-bold text-2xl text-blue-700 mb-4 '>Sign Up</p>


                    <form className='flex flex-col gap-4' type="submit"
                                onSubmit={handleSubmit(onSubmit)}>

                        <input className='signup-input' name='username'  type="text" placeholder='Username'
                            // onChange={(event) => {
                           //calling the handleChange function and passing the event generated
                            //     handleChange(event);
                            // }} 
                            {...register("username")}
                            />

                            {/* <p className='text-xs lg:text-sm text-red-600 font-semibold'>{errors.iAgree?.message}</p> */}

                        <input className='signup-input' name='email' type="text" placeholder='Email'
                                {...register("email")}/>

                        <input className='signup-input' name='password' type="text"placeholder='Password' 
                            {...register("password")} />

                        <input className='signup-input' name='confirmpassword' type="text" placeholder='Confirm Password'
                            {...register('confirmPassword')} />
                    </form>

                    <button className='bg-blue-800 mt-5 p-2 text-white font-bold rounded-md' type='submit'>Sign Up</button>
                    
                    <div className='flex  gap-[4px] mt-2 justify-center'>
                        <input type="checkbox" {...register('IAgree')} />
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
