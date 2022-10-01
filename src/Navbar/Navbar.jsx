import React, { useState } from 'react';
import { useEffect } from 'react';
import logo from './MAVS LOGO-1-02.png';
import './Navbar.css'
import NavLinks from './NavLinks';
const Navbar = () => {
  const [open,setOpen] = useState(false);
  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    const handleScroll = () =>{
      setSticky(window.scrollY);
    };
    window.addEventListener("scroll",handleScroll);
    return()=>window.removeEventListener("scroll",handleScroll);
  });
  return (
    <nav className={`${sticky ? "sticky" :""}`}>
        <div className="flex items-center font-medium justify-around height-63 navbar">
            <div className="z-50 p-5 md:w-auto w-full flex justify-between ">
              <img src={logo} alt="logo" className='logo-img md:cursor-pointer'/>
              <div className="text-3xl md:hidden icon1 text-white" onClick={()=>setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                </div>
            </div>
            <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
              <li className='py-7 px-2 inline-block navbar-links'>
                Home
              </li>
              {/* <li>
            <NavLink to="/" className="py-7 px-3 inline-block">
              Home
            </NavLink>
          </li> */}
          <NavLinks/>
            </ul>
          {/* Mobile Nav */}
          <ul className={`
          md:hidden bg-black absolute w-full h-full bottom-0 py-24 pl-4
          duration-500 ulsticky ${open ? "left-0" : "left-[-100%]"} 
          `}>
          <li className='py-7 px-3 inline-block text-white'>
                Home
              </li>
              <NavLinks/>

          </ul>

        </div>
    </nav>
  )
}

export default Navbar;
