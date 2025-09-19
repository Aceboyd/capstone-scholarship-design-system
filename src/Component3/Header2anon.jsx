import { useEffect, useRef, useState } from 'react'
import { AlignJustify, AlignRight, ChevronDown } from 'lucide-react';
import capstoneLogo from "../assets/image/nice.png";
import userProfile from "../assets/image/form/face.png";

const Header2anon = () => {
const [isOpen, setIsOpen] = useState(false);
const menuRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


  return (
    <div className='h-8'>
    <nav  className='w-full bg-white fixed top-0 text-black p-4 z-9999'
  >
      <div className="flex flex-row items-center justify-between ml-[-20px] mt-[-20px] px-5 lg:px-8">
          <img src={capstoneLogo} alt="capstone logo" className='w-auto h-18 '/>
        
        
        <ul
          ref={menuRef} 
          className={`lg:flex lg:items-center absolute top-20 lg:static w-[40%] text-center gap-7 lg:gap-9 bg-white opacity-97 min-lg:bg-none max-lg:text-black font-semibold lg:w-auto lg:bg-transparent lg:flex-row z-9999 ${
            isOpen ? 'h-600px w-full right-0 z-9999' : 'h-[0px]'
          }`}
        >
          <li className={`block ${isOpen ? "mt-15 text-black" : "max-lg:hidden"} pt-4 pb-4 text-black
                hover:text-blue-950`}><a href="#">Home</a></li>
          <li className={`block ${isOpen ? " text-black" : "max-lg:hidden"} pt-4 pb-4  text-black
                hover:text-blue-950`} ><a href="#">Find Scholarships</a></li>
          <li className={`block ${isOpen ? " text-black" : "max-lg:hidden"} pt-4 pb-4  text-black
                hover:text-blue-950`} ><a href="#">How It Works</a></li>
          <li className={`block ${isOpen ? "mb-15 text-black" : "max-lg:hidden"} pt-4 pb-4  text-black
                hover:text-blue-950`} ><a href='#'>Categories <span className='inline-block w-3 h-4'><ChevronDown/></span></a></li>
        </ul>
        
        <div className='flex justify-end gap-5 pr-5'>
          <button className="text-gray-600 max-lg:hidden">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      ></path>
                    </svg>
                  </button>
                  <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 max-lg:hidden">
                    Apply Now
                  </button>
                  <img
                    src={userProfile}
                    alt="User Profile"
                    className="h-10 w-10 rounded-full max-lg:hidden"
                  />
        </div>
        <button 
          className="block cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AlignRight className='text-3xl' /> : <AlignJustify className='text-3xl' />}
        </button>
      </div>
    </nav>
          </div>

  )
}

export default Header2anon