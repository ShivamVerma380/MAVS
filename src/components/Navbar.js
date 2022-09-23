import { faRoad } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown.js'
import Button from './Button.js'
import DropdownProducts from './DropdownProducts.js';
import './Navbar.css'
import logo from './MAVS LOGO-1-02.png'
function Navbar(){
    const [click, setClick] = useState(false)

    const [dropdown, setDropdown] = useState(false) 

    const [dropdown1,setDropdown1] = useState(false)

    // const [dropdownProducts,setDropdownProducts] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () =>{
        if(window.innerWidth<960){
            setDropdown(false)
        }
        else{
            setDropdown(true)
        }
    }
    const onMouseEnter1 = () =>{
        if(window.innerWidth<960){
            setDropdown1(false)
        }
        else{
            setDropdown1(true)
        }
    }
    const onMouseLeave = () =>{
        if(window.innerWidth<960){
            setDropdown(false)
        }
        else{
            setDropdown(false)
        }
    }

    const onMouseLeave1 = () =>{
        if(window.innerWidth<960){
            setDropdown1(false)
        }
        else{
            setDropdown1(false)
        }
    }
     

    return(
        <>
           <nav className='navbar'>
            <Link to='/' ><img src={logo} alt="" className='mavs-logo'/></Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times':'fas fa-bars'}/> 
                {/* <i className={click ? <FontAwesomeIcon icon="fas fa-bars"/> : <FontAwesomeIcon icon="fas fa-times"/>}/> */}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Products <i className='fas fa-caret-down' onClick={<DropdownProducts/>}/>
                    </Link>
                    {dropdown1 && <DropdownProducts/>}
                </li>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Solutions <i className='fas fa-caret-down'/>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        About Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
            </ul>
            {/* <Button/> */}
           </nav>
        </>
    )
}

export default Navbar;