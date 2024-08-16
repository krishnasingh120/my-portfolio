import React from 'react'
import'./skill.css'
import Webd from '../../assets/web development.png'
import Webde from '../../assets/webdesign.png'
import Javaf from '../../assets/java-icon.png'

const Skill = () => {
  return (
    <section id='skill'>
        <span className='title'>What I Do</span>
        <span className='skillDesc'>Efficient and knowledgeable coder with proficiency in HTML, CSS, JavaScript and Java programming languages. Coordinated and collaborative team player with attention to detail, graphic design skills, and ability to contribute to code base improvement initiatives and UX improvement projects. </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={Webd} alt='Webd' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Development</h2>
                    <p>I have developed several single page applications using front-end as well as back-end.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Webde} alt='Webde' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>I am proficient in CSS, Tailwind CSS, Font Awesome.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Javaf} alt='Javaf' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Java Full Stack Developer</h2>
                    <p>I have a proficiency in MySQL, Java.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill;
