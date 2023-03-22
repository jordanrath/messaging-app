import React, { useState } from 'react'
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faFacebookF, faInstagram, faTwitter, faLinkedinIn);

const Contact = () => {
    const [characters, setCharacters] = useState(0);

  return (
    <>
        <Menu showMenu={true} />
        <div className="contact-section__container">
                <section className='contact-section' id='contact' data-aos='zoom-in-up'>
                    <div className="contact-section__title">
                        <h1>Contact Us</h1>
                        <h3>Any questions or comments?  Just write us a message!</h3>
                    </div>
                    <div className='contact__header-bar'></div>
                    <div className='contact__form-container'>
                        <div className='contact__form-sidecontent'>
                            <div className="contact__sidecontent-title">
                                <h2>Contact Information</h2>
                                <p>Fill out the form and our team will get back to you as soon as possible.</p>
                            </div>
                            <div className='contact__form-info'>
                                <span className="material-symbols-outlined icon__filled">
                                    call
                                </span>
                                <p>+0123 4567 8910</p>
                            </div>
                            <div className="contact__form-info">
                                <span className="material-symbols-outlined icon__filled">
                                    mail
                                </span>
                                <p>chatroom@testemail.com</p>
                            </div>
                            <div className="contact__form-info">
                                <span className="material-symbols-outlined icon__filled">
                                    location_on 
                                </span>
                                <p>123 Chatroom St</p>
                            </div>
                            <div className='contact__sidecontent-footer'>
                                <a id='profile-link' className='contact-info1' href='https://facebook.com/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                                <a id='profile-link' className='contact-info2' href='https://instagram.com/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                                <a id='profile-link' className='contact-info3' href='https://twitter.com/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                                <a id='profile-link' className='contact-info4' href="https://www.linkedin.com/in/jordan-rath-75234a249/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
                            </div>
                        </div>
                        <form className='contact__form' action="https://formsubmit.co/rath.jordan@icloud.com" method="POST">
                            <div className="contact__form-title">
                                <p>First Name</p>
                                <label htmlFor='fname'>
                                    <input type='text' id='fname' placeholder='John' name='fname' required />
                                </label>
                            </div>
                            <div className="contact__form-title">
                                <p>Last Name</p>
                                <label htmlFor='lname'>
                                    <input type='text' id='lname' placeholder='Doe' name='lname' required />
                                </label>
                            </div>
                            <div className="contact__form-title">
                                <p>Email</p>
                                <label>   
                                    <input type='email' id='email' placeholder='Enter an email...' name='email' required/>
                                </label>
                            </div>
                            <div className="contact__form-title">
                                <p>Phone</p>
                                <label>           
                                    <input type='text' id='phone' placeholder='Enter a phone number...' name='phone'/>
                                </label>
                            </div>
                            <div className="contact__form-title">
                                <p>Message</p>
                                <label>
                                    <textarea maxLength={500} id='message' name='message' placeholder='Write us a message...'  onChange={(e) => setCharacters(e.currentTarget.value.length)}required />
                                    <p>{characters === 0 ? "" : `${characters}/500`}</p>
                                </label>
                            </div>
                            <div className='contact__btn-container'>
                                <button type='submit' className='contact__btn'>Submit Message</button>
                            </div>    
                        </form>
                    </div>
                </section>
            </div>
        </>
  )
}

export default Contact;