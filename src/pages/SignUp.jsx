import React, { useState } from 'react';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { db } from '../firebase'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  });
  const {name,email, password} = formData;
  const navigate = useNavigate()
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, 
        email,
        password
        );
        
        updateProfile(auth.currentUser, {
          displayName:name
        })
      const user = userCredential.user
      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy)
      navigate("/")
      // toast.success("Sign up was successful")
    } catch (error) {
      toast.error("Something went wrong with the registration");
      console.log(error.message)
    }
  }
  return (
    <section>
      <h1 className='text-3xl font-bold text-center mt-6'>Sign Up</h1>
      <div className='flex justify-center items-center px-6 py-12 flex-wrap max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="key" 
          className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={onSubmit}>
            <input type="text" 
            id = "name"
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' 
            value ={name} 
            onChange={onChange}
            placeholder='Full name'/>
            <input type="email" 
            id = "email"
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' 
            value ={email} 
            onChange={onChange}
            placeholder='Email address'/>
            <div className='relative mb-6'>
            <input type={showPassword ? "text" : "password" } 
            id = "password"
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
            value ={password} 
            onChange={onChange}
            placeholder='Password'/>
            {showPassword ? (
              <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>
            ) : (
              <AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>
            )}
            </div>
            {//43:30
            }
            <div className='flex justify-between whitespace-nowrap mb-6 text-sm sm:text-lg'>
              <p>Have an account? <Link to="/sign-in" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>
                Sign In
                </Link></p>
              <p>
                <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">Forgot password?</Link>
              </p>
            </div>
            <button type="submit" className="w-full text-white bg-blue-600 uppercase text-sm font-medium px-7 py-3 rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out active:bg-blue-800"
            >
              Sign Up
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
