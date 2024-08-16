import React, { useState } from 'react'
import './navbar.css'
import logo from'../../assets/logo.png'
import contactImg from '../../assets/Capture.png'
import {Link} from 'react-scroll'
import menu from '../../assets/Menu.png'
const Navbar = () => {
  const [showMenu,setshowMenu]=useState(false);
  return (
   <nav className="navbar">
    <img src={logo}  alt='Logo' className='logo'/>
    <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItems'>Home</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>Portfolio</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItems'>Experience</Link>
    </div>
    <button className='desktopMenuBtn'onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    }}>
        <img src={contactImg} alt='ContactImg' className='desktopMenuImg'/>Contact Me</button>
        <img src={menu}  alt='Menu' className='mobMenu' onClick={()=>setshowMenu(!showMenu)}/>
    <div className='navMenu' style={{display: showMenu?'flex': 'none'}} >
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItems' onClick={()=>setshowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-50} duration={500} className='listItems' onClick={()=>setshowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItems' onClick={()=>setshowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='listItems' onClick={()=>setshowMenu(false)}>Experience</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItems' onClick={()=>setshowMenu(false)}>Contact Me</Link>
    </div>
   </nav>
  )
}

export default Navbar
