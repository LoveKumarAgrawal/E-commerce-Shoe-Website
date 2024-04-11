import React from 'react'
import TeamSection from './Home/Team'
import '../css/contact.css'
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <a href="#" className="icon"><img src="/src/images/social-icon-img/facebook-f.svg" alt="" /></a>
                <a href="#" className="icon"><img src="/src/images/social-icon-img/twitter.svg" alt="" /></a>
                <a href="#" className="icon"><img src="/src/images/social-icon-img/instagram.svg" alt="" /></a>
                <a href="#" className="icon"><img src="/src/images/social-icon-img/youtube.svg" alt="" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="contact">
        <div className="form">
          <h3>get in touch with us and we can help you</h3>
          <h2>Come to us or ask a question right now</h2>
          <div className="form-input">
            <input type="text" placeholder="Your Name" required />
            <input type="text" placeholder="Your Last Name" />
          </div>
          <div className="form-input">
            <input type="email" placeholder="Email" required />
            <input type="phone" placeholder="Phone" />
          </div>
          <textarea placeholder="Message"></textarea>
          <button className="homebtn btn-msg">Send Message</button>
        </div>
        <div className="video">
          <a href="https://maps.app.goo.gl/JuqaL2iE5RBbn3EW8" target="_blank">
            <video autoPlay muted loop>
              <source src='../src/video/gla.mp4' />
            </video>
          </a>
        </div>
      </div>
      {/* <div id="contact-service">
        <div className="box" id="box-1">
            <img src="src/images/logo/address.svg" alt=""/>
            <h3>Address</h3>
            <h4>GLA University, Mathura (281004)</h4>
        </div>
        <div className="box" id="box-2">
            <img src="src/images/logo/phone.svg" alt=""/>
            <h3>Phone Number</h3>
            <h4>+919528300525</h4>
        </div>
        <div className="box" id="box-3">
            <img src="src/images/logo/email.svg" alt=""/>
            <h3>Email US</h3>
            <h4>shivamsoni8445@gmail.com</h4>
        </div>
    </div> */}
    </>

  )
}

export default Contact