import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged }  from "firebase/auth";


export default function Header() {
    const [pageState, setPageState] = useState("Sign in");
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(() =>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setPageState("Profile")
            }else{
                setPageState("Sign in")
            }
        })
    }, [auth])
    function PathMatchRoute(route){
        if(route === location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
        <header className='flex justify-between px-3 max-w-6xl mx-auto items-center'>
            <div><img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className='h-5 cursor-pointer' onClick={()=>navigate("/")}/></div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`py-3 text-gray-400 text-sm font-semibold cursor-pointer border-b-[3px] border-b-transparent        ${PathMatchRoute("/") &&
                     "!border-b-red-500 !text-black"}`} onClick={()=>navigate("/")}>Home</li>
                    <li className={`py-3 text-gray-400 text-sm font-semibold cursor-pointer border-b-[3px] border-b-transparent        ${PathMatchRoute("/offers") && "!border-b-red-500 !text-black"}`} onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`py-3 text-gray-400 text-sm font-semibold cursor-pointer border-b-[3px] border-b-transparent ${(PathMatchRoute("/sign-in") || PathMatchRoute("/profile")) && "!border-b-red-500 !text-black"}`} 
                    onClick={()=>navigate("/profile")}>
                        {pageState}
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}
