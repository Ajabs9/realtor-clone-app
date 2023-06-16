import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';   
export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    function PathMathRoute(route){
        if(route === location.pathname){
            return true
        }
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between px-3 max-w-6xl mx-auto items-center'>
            <div><img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo" className='h-5 cursor-pointer' onClick={()=>navigate("/")}/></div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`py-3 text-gray-400 text-sm font-semibold cursor-pointer border-b-[3px] border-b-transparent        ${PathMathRoute('/') && "border-b-red-500 text-black"}`} onClick={()=>navigate("/")}>Home</li>
                    <li className={`py-3 text-gray-400 text-sm font-semibold cursor-pointer border-b-[3px] border-b-transparent        ${PathMathRoute('/offers') && "border-b-red-500 text-black"}`} onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`py-3 text-gray-400 text-sm font-semibold cursor-pointer border-b-[3px] border-b-transparent ${PathMathRoute('/sign-in') && "border-b-red-500 text-black"}`} onClick={()=>navigate("/sign-in")}>Sign in</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
