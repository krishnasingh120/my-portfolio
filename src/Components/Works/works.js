import React from 'react'
import'./works.css'
import Pwdg from '../../assets/Password.png'
import Weatherf from '../../assets/Weather.png'
import Taskt from '../../assets/TaskTracker.png'
import Todol from '../../assets/ToDoList.png'
import Seemore from '../../assets/seemore.png'
const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I am a hardworking, honest individual. I am a good time deeper, always willing to learn new skills. I am friendly, helpful and polite. I am able to work independently in busy environments and also within a team setting. I am outgoing and tactful, and able to listen effectively when solving problems.</span>
        <div className='worksImgs'>
          <img src={Pwdg} alt='Pwdg' className='worksImg'/>
          <img src={Taskt} alt='Taskt' className='worksImg'/>
          <img src={Weatherf} alt='Weatherf' className='worksImg'/>
          <img src={Todol} alt='Todol' className='worksImg'/>
        </div>
        <button className='workBtn'>
          <img src={Seemore} alt='Seemore' className='workBtnImg'/>See More</button>
    </section>

  )
}

export default Works
