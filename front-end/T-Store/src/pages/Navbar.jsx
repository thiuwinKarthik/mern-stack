import React, { useState } from 'react'
import LogoImage from '../assets/Logo.jpg'
import { FaBars, FaTimes} from "react-icons/fa";
import { Link } from 'react-router-dom'
const Navbar = () => {
  const[nav,setNav]=useState(false)
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-2 '>
      <div className='flex items-center justify-between '>
         <img className='md:h-20 md:w-25 h-15 w-15 ml-10 rounded-4xl'src={LogoImage} alt="Logo" />
         <ul className='hidden  sm:flex gap-20 cursor-pointer font-bold text-2xl mr-25  '>
           <p  className='hover:text-white hover:border-b-[2px] hover:border-white hover:border-solid hover:scale-105 ' ><Link to="/">Home</Link></p>
           <p className='hover:text-white hover:border-b-[2px] hover:border-white hover:border-solid hover:scale-105'><Link to="/create">Create</Link></p>
            
         </ul>
         <div onClick={()=>setNav(!nav)} className="flex cursor-pointer z-12 mr-2 sm:hidden hover:text-white" >
     {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
      </div>
      </div>
      <div className= {`bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-center items-center absolute z-10 top-0  ${nav?'left-[0px]':'left-[-2000px]'}  duration-500  sm:hidden   w-screen h-screen`}>
      
           <h1 onClick={()=>setNav(!nav)}  className='hover:text-white hover:border-b-[2px] hover:border-white hover:border-solid hover:scale-105 text-3xl mb-15 ' ><Link to="/">Home</Link></h1 >
           <h1 onClick={()=>setNav(!nav)} className='hover:text-white hover:border-b-[2px] hover:border-white hover:border-solid hover:scale-105 text-3xl mb-15'><Link to="/create">Create</Link></h1 >
            
         

      </div>
      
    </div>
  )
}

export default Navbar
