import React,{ useEffect, useState } from 'react'
import TeamSection from './Home/Team'
import '../css/contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import conf from '../conf/conf';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();

    //create a new object that contains the dynamic template params
    const templateParams = {
      from_fname: name,
      from_lastname: lastname,
      fromphone: phone,
      email: email,
      message: message
    }
    emailjs
      .send(conf.emailjsServiceId, conf.emailjsTemplateId, templateParams, conf.emailjsPublicId)
      .then(
        (response) => {
          toast.success("The message is sent", {autoClose: 3000})
          setName('');
          setLastName('');
          setEmail('');
          setPhone('');
          setMessage('');
        },
        (error) => {
          toast.error("Failed to send message", {autoClose: 3000})
        },
      );
  }

  return (
    <>
      <div id="section-three">
        <h2 className="heading">Still in doubt? Come and our team will help You</h2>
        <h4 className="heading sub-heading">feel free to ask</h4>
        <div className="team-container">
          {TeamSection.map(member => (
            <div className="box" key={member.id}>
              <div className="team" id={member.id}>
                <img className="team-img" src={member.imageSource} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.job}</p>
              <div className="social-icons">
                <a href="#" className="icon"><img src="social-icon-img/facebook-f.svg" alt="" /></a>
                <a href="#" className="icon"><img src="social-icon-img/twitter.svg" alt="" /></a>
                <a href="#" className="icon"><img src="social-icon-img/instagram.svg" alt="" /></a>
                <a href="#" className="icon"><img src="social-icon-img/youtube.svg" alt="" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
      <div id="contact">
        <div className="form">
          <h3>get in touch with us and we can help you</h3>
          <h2>Come to us or ask a question right now</h2>
          <div className="form-input">
            <input type="text" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} required />
            <input type="text" placeholder="Your Last Name" value={lastname} onChange={(e)=>setLastName(e.target.value)} />
          </div>
          <div className="form-input">
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <input type="phone" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          </div>
          <textarea placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
          <button className="homebtn btn-msg" type='submit'>Send Message</button>
          <ToastContainer />
        </div>
        <div className="video">
          <a href="https://maps.app.goo.gl/JuqaL2iE5RBbn3EW8" target="_blank">
            <video autoPlay muted loop>
              <source src='video/gla.mp4' />
            </video>
          </a>
        </div>
      </div>
      </form>
    </>

  )
}

export default Contact