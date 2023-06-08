import React from 'react'
import './contact.css'

function Contact() {
  return (
    <section id="contact">
        <div className='container'>
            <h2 className="section-title">Contact</h2>
            <div className='contact-container d-flex flex-column gap-1'>
                <div className="full-name d-flex gap-1">
                    <div className="first flex-1">
                        <label htmlFor="first">First Name</label>
                        <input type="text" id='first'/>
                    </div>
                    <div className="last flex-1">
                        <label htmlFor="first">Last Name</label>
                        <input type="text" id='first'/>
                    </div>
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" />
                </div>
                <div className="message">
                    <label htmlFor="message">Message</label>
                    <textarea id="message"></textarea>
                </div>
                <input className='btn' type="submit" value="Send message"/>
            </div>
        </div>
    </section>
  )
}

export default Contact