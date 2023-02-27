import React from 'react'
import Menu from './Menu';

const Contact = () => {
  return (
    <>
    <Menu />
    <section className='contact-section' id='contact'>
        <h1>CONTACT</h1>
        <div className='contact__header-bar'></div>
        <form className='contact__form' action="https://formsubmit.co/rath.jordan@icloud.com" method="POST">
            <label htmlFor='name'></label>
                <input type='text' id='name' placeholder='Name' name='name' required />
            <label htmlFor='email'></label>
                <input type='email' id='email' placeholder='Enter Email' name='email' required/>
            <label htmlFor='message'></label>
                <textarea id='message' name='message' placeholder='Your Message' required />
            <div className='contact__btn-container'>
                <button type='submit' className='contact__btn'>SUBMIT</button>
            </div>    
        </form>
    </section>
    </>
  )
}

export default Contact;