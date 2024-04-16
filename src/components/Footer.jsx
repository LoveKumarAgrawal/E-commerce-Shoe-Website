import React,{useState} from 'react'
import '../css/footer.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
    const [subscribeEmail, setSubscribeEmail] = useState('')
    const handleSubscribe = (e)=>{
        e.preventDefault();
    
        //create a new object that contains the dynamic template params
        const templateParams = {
          email: subscribeEmail
        }
        emailjs
          .send('service_tjk2anu', 'template_pfqy2bw', templateParams, '-YDlVhrgGseGZTMMr')
          .then(
            (response) => {
                setSubscribeEmail('');
                toast.success("The email is sent", {autoClose: 3000})
            },
            (error) => {
              toast.error("Failed to send email", {autoClose: 3000})
            },
          );
      }
    return (
        <>
            <footer>
                <form onSubmit={handleSubscribe}>
                <div className="first-col colm">
                    <h3>Shoe Savvy</h3>
                    <input type="email" placeholder="Enter Your Email" value={subscribeEmail} onChange={(e)=>setSubscribeEmail(e.target.value)} required />
                    <button className="homebtn btn-sm" type='submit'>Subscribe</button>
                </div>
                </form>
                <ToastContainer />
                <div className="second-col colm">
                    <h3>Contact Us</h3>
                    <p>Phone: +919528300525</p>
                    <p>Email: shivamsoni8445@gmail.com</p>
                    <p>Address: GLA University Mathura, 281004</p>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <img src="/src/images/social-icon-img/twitter.svg" alt="" />
                        </a>
                        <a href="#" className="icon" id='fb'>
                            <img src="/src/images/social-icon-img/facebook-f.svg" alt="" />
                        </a>
                        <a href="#" className="icon">
                            <img src="/src/images/social-icon-img/youtube.svg" alt="" />
                        </a>
                        <a href="#" className="icon">
                            <img src="/src/images/social-icon-img/instagram.svg" alt="" />
                        </a>
                        <a href="#" className="icon">
                            <img src="/src/images/social-icon-img/google-plus-g.svg" alt="" />
                        </a>
                        <a href="#" className="icon">
                            <img src="/src/images/social-icon-img/github.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="third-col colm">
                    <h3>Recent News</h3>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Get In Touch</p>
                </div>
            </footer>
        </>
    )
}

export default Footer