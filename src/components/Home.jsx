import React from 'react'
import Products from './Home/HomeProducts'
import HomeCategory from './Home/HomeCategory'
import HomeProductCompare from './Home/HomeProductCompare'
import TeamSection from './Home/Team'
import { Link } from 'react-router-dom'
import '../css/home.css'

function Home() {
    return (
        <>
            <div id="home">
                <div className="home-left">
                    <p className="heading">exclusive</p>
                    <p className="heading">new shoes</p>
                    <p className="subHeading">up to 30% off all shoes & products</p>
                    <div className="btn-container">
                        <a href="shoe.html" target="_blank"><button className="homebtn">Shop Now</button></a>
                    </div>
                </div>
                <div className="home-right">
                    <Link to={`/shoe/shoe-item2`}>
                        <div id="home-img"></div>
                    </Link>
                    {/* <a href="shoe.html" target="_blank">
                        
                    </a> */}
                </div>
            </div>
            <div id="shoe-category">
                {HomeCategory.map(category => (
                    <div className="box" id={category.id} key={category.id}>
                        <h3>{category.heading}</h3>
                        <button>Explore All <img src="/src/images/shoe-category/arrow-right.svg" alt="" /></button>
                    </div>
                ))}
            </div>
            {/* <div id="section-one">
                <h2 className="heading">Bestsellers Products</h2>
                <div className="shoe-container">
                    {HomeProducts.map((shoe) => (
                        <div className="shoe-group" key={shoe.id}>
                            <div className="shoe-item" id={shoe.id}>
                                <img className="shoe-item-img" src={shoe.image} alt={shoe.name} />
                                <div className="social-icons">
                                    <a href="#" className="icon">
                                        <img src="/src/images/social-icon-img/menu.svg" alt="" />
                                    </a>
                                    <a href="#" className="icon">
                                        <img src="/src/images/social-icon-img/search.svg" alt="" />
                                    </a>
                                    <a href="#" className="icon">
                                        <img src="/src/images/social-icon-img/like.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <h3>{shoe.name}</h3>
                            <p>{shoe.price}</p>
                        </div>
                    ))}
                </div>
            </div> */}
            <div id="section-one">
                <h2 className="heading">Bestsellers Products</h2>
                <div className="shoe-container">
                    {Products.map((shoe) => (
                        <div className="shoe-group" key={shoe.id}>
                            <Link to={`/shoe/${shoe.id}`}>
                                <div className="shoe-item" id={shoe.id}>
                                    <img className="shoe-item-img" src={shoe.image.shoe1} alt={shoe.name} />
                                    <div className="social-icons">
                                        <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                                            <img src="/src/images/social-icon-img/menu.svg" alt="" />
                                        </a>
                                        <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                                            <img src="/src/images/social-icon-img/search.svg" alt="" />
                                        </a>
                                        <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                                            <img src="/src/images/social-icon-img/like.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </Link>
                            <h3>{shoe.name}</h3>
                            <p>{shoe.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div id="section-two">
                <div className="bg-container">
                    <div className="bg-img">
                        {/* <!-- background img by css --> */}
                    </div>
                </div>
                <div className="info">
                    <h1>Sport Shoes</h1>
                    <p>Up to 20% off for you</p>
                    <button className="homebtn btn-sm">Shop Now</button>
                </div>
            </div>

            <div id="service">
                <div className="box" id="box-1">
                    <img src="../src/images/logo/gift.svg" alt="" />
                    <h3>free shipping</h3>
                    <h4>For all order over $15</h4>
                </div>
                <div className="box" id="box-2">
                    <img src="../src/images/logo/truck.svg" alt="" />
                    <h3>delivery on time</h3>
                    <h4>Definition and measurement</h4>
                </div>
                <div className="box" id="box-3">
                    <img src="../src/images/logo/secure.svg" alt="" />
                    <h3>secure pament</h3>
                    <h4>100% secure payment</h4>
                </div>
            </div>


            <div id="shoe-compare">
                <div className="box main" id="box-1">
                    <h2 className="topic">featured products</h2>
                </div>
                <div className="box main" id="box-2">
                    <h2 className="topic">top rated products</h2>
                </div>
                <div className="box main" id="box-3">
                    <h2 className="topic">top sale products</h2>
                </div>



                {HomeProductCompare.map((shoe) => (
                    <div className={`box ${shoe.className}`} id={`box-${shoe.id}`} key={shoe.id}>
                        <img src={shoe.image} alt="" />
                        <div className="info">
                            <div className="name">
                                <a href="#">
                                    <h2>{shoe.name}</h2>
                                </a>
                            </div>
                            <h2 className="price">{shoe.price}</h2>
                            {shoe.discountPrice && <>&nbsp;<span>{shoe.discountPrice}</span></>}
                        </div>
                    </div>
                ))}
            </div>































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
                        <video autoPlay muted>
                            <source src='../src/video/gla.mp4' />
                        </video>
                    </a>
                </div>
            </div>

            <div id="instra-container">
                <div className="heading">
                    <h2>ShoeSavvy on instagram</h2>
                    <div className="line"></div>
                    <h3>#ShoeSavvy</h3>
                </div>

                <div id="instra">
                    <div className="box" id="box-1">
                        <div className="bg-back">
                            <img src="../src/images/instra-img/img-1.webp" alt="" />
                        </div>
                        <div className="bg-upper">
                            <a href="#"><img src="../src/images/social-icon-img/instagram.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="box" id="box-2">
                        <div className="bg-back">
                            <img src="../src/images/instra-img/img-2.webp" alt="" />
                        </div>
                        <div className="bg-upper">
                            <a href="#"><img src="../src/images/social-icon-img/instagram.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="box" id="box-3">
                        <div className="bg-back">
                            <img src="../src/images/instra-img/img-3.webp" alt="" />
                        </div>
                        <div className="bg-upper">
                            <a href="#"><img src="../src/images/social-icon-img/instagram.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="box" id="box-4">
                        <div className="bg-back">
                            <img src="../src/images/instra-img/img-4.webp" alt="" />
                        </div>
                        <div className="bg-upper">
                            <a href="#"><img src="../src/images/social-icon-img/instagram.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="box" id="box-5">
                        <div className="bg-back">
                            <img src="../src/images/instra-img/img-5.webp" alt="" />
                        </div>
                        <div className="bg-upper">
                            <a href=""><img src="../src/images/social-icon-img/instagram.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home