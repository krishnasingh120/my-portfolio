import React, { useRef } from 'react'
import'./contact.css'
import Bit from '../../assets/bharat_intern_logo.png'
import Oib from '../../assets/oasis_infobyte_logo.png'
import Mst from '../../assets/maxscripts_technologies_logo.png'
import Insta from '../../assets/instagram.jpeg'
import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/github.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_asmakva', 'template_ffjgdrm', form.current, {publicKey: 'FI4GvNm-XqG-JlYrK'})
      .then((result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        });
  };
  return (
    <section id='contactPage'>
        <div id='experience'>
          <h2 className='contactPageTitle'>Experience</h2>
          <p className='companyDesc'>I have had the opportunity to work with few group of companies.The companies I have worked with as a intern includes </p>
          <div className='companyImgs'>
            <img src={Bit} alt='Bit' className='companyImg'/>
            <img src={Oib} alt='Oib' className='companyImg'/>
            <img src={Mst} alt='Mst' className='companyImg'/>
          </div>
        </div>
        <div id='contact'>
            <h2 className='contactPageTitle'>Contact Me</h2>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Mail ID' name='your_email'/>
                <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={Insta} alt='Insta' className='link'/>
                    <img src={Linkedin} alt='Linkedin' className='link'/>
                    <img src={Github} alt='Github' className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
