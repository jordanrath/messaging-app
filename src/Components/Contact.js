import React from 'react'
import Menu from './Menu';

const Contact = () => {
  return (
    <>
        <Menu />
        <section className='contact-section' id='contact' data-aos='zoom-in-up'>
            <h1>Contact Us</h1>
            <h3>Any questions or comments?  Just write us a message!</h3>
            <div className='contact__header-bar'></div>
            <div className='contact__form-container'>
                <div className='contact__form-sidecontent'>
                    <h2>Contact Information</h2>
                    <span class="material-symbols-outlined">
                        call
                    </span>
                    <span class="material-symbols-outlined">
                        mail
                    </span>
                    <span class="material-symbols-outlined">
                        location_on
                    </span>
                </div>
                <form className='contact__form' action="https://formsubmit.co/rath.jordan@icloud.com" method="POST">
                    <label>
                        <input type='text' id='name' placeholder='First Name' name='name' required />
                    </label>
                    <label>
                        <input type='text' id='name' placeholder='Last Name' name='name' required />
                    </label>
                    <label>
                        <input type='email' id='email' placeholder='Email' name='email' required/>
                    </label>
                    <label>
                        <input type='text' id='phone' placeholder='Phone' name='phone'/>
                    </label>
                    <label>
                        <textarea id='message' name='message' placeholder='Your Message' required />
                    </label>
                    <div className='contact__btn-container'>
                        <button type='submit' className='contact__btn'>Submit Message</button>
                    </div>    
                </form>
            </div>
        </section>
        </>
  )
}

export default Contact;