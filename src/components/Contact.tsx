import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs"
import React from 'react'
import "../app/styles/contact.css"

const Contact = () => {
  return (
    <div  id='contact' className='contact-div'>
      <div className='contact-grid md:grid-cols-2'>
        <div className='contact-space'>
          <h2 className='contact-heading' data-aos="fade-down">Get in touch</h2>
          <p className='contact-text' data-aos="fade-down">
            Drop me a line, give  me a call, or send me a message by submitting the form.
          </p>
          <div className='contact-flex' data-aos="fade-down">
          <AiOutlineMail size={30}/> AsmaAfshar293@gmail.com
          </div>
          <div className='contact-flex' data-aos="fade-down">
         <BsTelephone size={30} /> (021) 000-0000
          </div>
        </div> 
        <div className="contact-space">
          <div className="contact-form" data-aos="fade-down">
            <label htmlFor="name">Name</label>
            <input type="text" 
            className="h-[40px] bg-transparent border border-accent"
            id="name"/>
          </div>
          <div className="contact-form" data-aos="fade-down">
            <label htmlFor="email">E-mail</label>
            <input type="text" 
            className="h-[40px] bg-transparent border border-accent"
            id="email"/>
          </div>
          <div className="contact-form" data-aos="fade-down">
            <label htmlFor="msg">Message</label>
            <textarea 
            className="bg-transparent border border-accent"
            id="msg" rows={8}>
            </textarea>
          </div>
          <button className="contact-button" data-aos="fade-down">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
