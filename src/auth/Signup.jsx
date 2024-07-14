import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../validation/formValidation';
import '../index.css';
import bgimg from '../assets/undraw_signup.svg';

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signUpSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className='h-screen w-full flex justify-center items-center'>
                <div className='h-full w-full sm:h-[80%] sm:w-[80%] grid sm:grid-cols-2' style={{ boxShadow: '20px 20px 20px #DEDEDE)' }}>
                    <div className='flex justify-center'>
                        <div className='flex flex-col justify-center text-center'>
                            <p className='font-bold text-2xl text-blue-700 mb-4'>Sign Up</p>

                            <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className='signup-input'
                                    name='username'
                                    type='text'
                                    placeholder='Username'
                                    {...register('username')}
                                />
                                {errors.username && (
                                    <p className='text-xs lg:text-sm text-red-600 font-semibold'>{errors.username.message}</p>
                                )}

                                <input
                                    className='signup-input'
                                    name='email'
                                    type='text'
                                    placeholder='Email'
                                    {...register('email')}
                                />
                                {errors.email && (
                                    <p className='text-xs lg:text-sm text-red-600 font-semibold'>{errors.email.message}</p>
                                )}

                                <input
                                    className='signup-input'
                                    name='password'
                                    type='text'
                                    placeholder='Password'
                                    {...register('password')}
                                />
                                {errors.password && (
                                    <p className='text-xs lg:text-sm text-red-600 font-semibold'>{errors.password.message}</p>
                                )}

                                <input
                                    className='signup-input'
                                    name='confirmPassword'
                                    type='text'
                                    placeholder='Confirm Password'
                                    {...register('confirmPassword')}
                                />
                                {errors.confirmPassword && (
                                    <p className='text-xs lg:text-sm text-red-600 font-semibold'>{errors.confirmPassword.message}</p>
                                )}

                                <button className='bg-blue-800 mt-5 p-2 text-white font-bold rounded-md' type='submit'>
                                    Sign Up
                                </button>
                            </form>

                            <div className='flex gap-[4px] mt-2 justify-center'>
                                <input type='checkbox' {...register('IAgree')} />
                                <p>
                                    I agree to all <span className='text-blue-700'>Terms and Conditions</span>
                                </p>
                            </div>
                            {errors.IAgree && (
                                <p className='text-xs lg:text-sm text-red-600 font-semibold'>{errors.IAgree.message}</p>
                            )}
                        </div>
                    </div>

                    <div className='flex flex-col justify-center text-center gap-4 mt-12'>
                        <img src={bgimg} alt='gym image' />
                        <p>
                            Already a Member?{' '}
                            <span className='text-blue-700'>
                                <a href='/Signin'>Sign In</a>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
