import React from 'react';
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
const Contact = () => {
     return (
          <section id='contact'>
               <h5>Get In Touch</h5>
               <h2>Contact Me</h2>

               <div className="container contact_container">
                    <div className="contact_options">
                         <article className='contact_option'>
                              <MdOutlineEmail />
                              <h4>Email</h4>
                              <h5>vanquang.work@gmail.com</h5>
                              <a href="mailto:vanquang.work@gmail.com" target='_blank'>Send a message</a>
                         </article>
                         <article className='contact_option'>
                              <RiMessengerLine />
                              <h4>Messenger</h4>
                              <h5>Trần Văn Quang</h5>
                              <a href="https://m.me/tranvanquang15" target='_blank'>Send a message</a>
                         </article>

                    </div>
                    <form action="">
                         <input type="text" name='name' placeholder='Your Full Name' required />
                         <input type="email" name='email' placeholder='Your Emai' required />
                         <textarea name='message' placeholder='Your Message' required />
                         <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
               </div>

          </section>
     );
};

export default Contact;