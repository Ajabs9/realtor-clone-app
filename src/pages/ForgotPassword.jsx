import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  function onChange(e){
    setEmail(e.target.value);
    }
  return (
    <section>
      <h1 className='text-3xl font-bold text-center mt-6'>Forgot Password</h1>
      <div className='flex justify-center items-center px-6 py-12 flex-wrap max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="key" 
          className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form >
            <input type="email" 
            id = "email"
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' 
            value ={email} 
            onChange={onChange}
            placeholder='Email address'/>
            {//43:30
            }
            <div className='flex justify-between whitespace-nowrap mb-6 text-sm sm:text-lg'>
              <p>Don't have an account? <Link to="/sign-up" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Register</Link></p>
              <p>
                <Link to="/sign-in" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">Sign in instead</Link>
              </p>
            </div>
            <button type="submit" className="w-full text-white bg-blue-600 uppercase text-sm font-medium px-7 py-3 rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out active:bg-blue-800"
            >
              Send reset password
            </button>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
              <p className="font-semibold text-center mx-4 ">OR</p>
            </div>
          </form>
          <OAuth />
        </div>
      </div>
    </section>
  )
}
