import React from 'react'
import '../css/footer.css'

function Footer() {
    return (
        <>
            <footer>
                <div className="first-col colm">
                    <h3>Shoe Savvy</h3>
                    <input type="email" placeholder="Enter Your Email" />
                    <button className="homebtn btn-sm">Subscribe</button>
                </div>
                <div className="second-col colm">
                    <h3>Contact Us</h3>
                    <p>Phone: +919528300525</p>
                    <p>Email: shivamsoni8445@gmail.com</p>
                    <p>Address: GLA University Mathura, 281004</p>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <img src="/src/images/social-icon-img/twitter.svg" alt="" />
                        </a>
                        <a href="#" className="icon">
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