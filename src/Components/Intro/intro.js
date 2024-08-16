import React from 'react'
import'./intro.css'
import bg from'../../assets/me.png';
import btnImg from '../../assets/H.png'
import { Link } from 'react-scroll';
const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
           <span className='hello'>Hello!</span>
           <span className='introText'>I'm <span className='introName'>Krishna</span> <br/>Full Stack Developer </span>
           <p className='introPara'>I am a skilled full stack developer with experience in creating<br/> visually appealing websites.</p>
           <Link><button className='btn'><img src={btnImg} alt='Hire Me'  className='btnImg'/></button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro
