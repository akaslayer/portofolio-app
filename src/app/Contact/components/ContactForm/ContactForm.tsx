import Image from 'next/image'
import React from 'react'
import pic from '../../../../../public/pic3.png'

const ContactForm = () => {
  return (
    <div className='contact--container'>
      <div className='contact--grid p-40'>
        <div className='contact--item'>
          <div className='pic'>
            <Image src={pic} alt='' />
          </div>
          <div className='contact--details'>
            <h4>Contact Details</h4>
            <h3>hendrysurijanto123@gmail.com</h3>
            <h3>+62 81931386119</h3>
          </div>

          <div className='social--media'>
            <p>Social</p>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Webflow</li>
            <li>Figma</li>
          </div>
        </div>

        <div className='contact--item'>
          <h2>Let's build something cool together</h2>
          <div className='form'>
            <div className='input--form'>
              <label htmlFor='Name'>Name</label>
              <input type='text' placeholder='Harry Potter' />
            </div>
            <div className='input--form'>
              <label htmlFor='Email'>Email</label>
              <input type='text' placeholder='ayush.barnwa@brights@gmail.com' />
            </div>
            <div className='input--form'>
              <label htmlFor='Subject'>Subject</label>
              <input type='text' placeholder='For web design work Enquire' />
            </div>
            <div className='input--form'>
              <label htmlFor='Name'>Name</label>
              <textarea placeholder='Type your Message' />
            </div>
            <div className='form--button'>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm