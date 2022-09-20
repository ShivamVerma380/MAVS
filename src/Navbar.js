import React,{useState} from 'react'
import { Link } from 'react-router-dom';


function Navbar(){
    return(
        <>
           <nav className='navbar'>
            <Link to='/' className='navbar-logo'>MAVS</Link>
           </nav>
        
        </>
    )
}

export default Navbar;