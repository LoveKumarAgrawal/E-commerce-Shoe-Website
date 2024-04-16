import React from 'react'
import Products from './Home/HomeProducts'
import HomeProductCompare from './Home/HomeProductCompare'
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
                    <Link to={`/shoe/shoe-item3`}>
                        <button className="homebtn">Shop Now</button>
                    </Link>
                    </div>
                </div>
                <div className="home-right">
                    <Link to={`/shoe/shoe-item3`}>
                        <div id="home-img"></div>
                    </Link>
                </div>
            </div>
            <div id="shoe-category">
                <div className="box" id="box-1">
                    <h3>men collections</h3>
                    <Link to={'/men'} className='navlink'>
                        <button>Explore All <img src="/src/images/shoe-category/arrow-right.svg" alt="" /></button>
                    </Link>
                </div>
                <div className="box" id="box-2">
                    <h3>women collections</h3>
                    <Link to={'/women'} className='navlink'>
                        <button>Explore All <img src="/src/images/shoe-category/arrow-right.svg" alt="" /></button>
                    </Link>
                </div>
                <div className="box" id="box-3">
                    <h3>sports collections</h3>
                    <Link to={'/sports'} className='navlink'>
                        <button>Explore All <img src="/src/images/shoe-category/arrow-right.svg" alt="" /></button>
                    </Link>
                </div>
            </div>
            <div id="section-one">
                <div className="heading">
                    <h2>Bestsellers Products</h2>
                    <div className="line"></div>
                </div>
                <div className="shoe-container">
                    {Products.map((shoe) => (
                        <div className="shoe-group" key={shoe.id}>
                            <Link to={`/shoe/${shoe.id}`}>
                                <div className="shoe-item" id={shoe.id}>
                                    <img className="shoe-item-img" src={shoe.image.shoe1} alt={shoe.name} />
                                    <div className="social-icons">
                                        <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                                            <img className="icon" src="/src/images/social-icon-img/menu.svg" alt="" />
                                        </a>
                                        <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                                            <img className="icon" src="/src/images/social-icon-img/search.svg" alt="" />
                                        </a>
                                        <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
                                            <img className="icon" src="/src/images/social-icon-img/like.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </Link>
                            <h3>{shoe.name}</h3>
                            <p>₹{shoe.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div id="offer">
                <div className="box" id="box-1">
                    <h3>New Collection</h3>
                    <h1>The Summer Sale Off 50%</h1>
                    <a href="#section-one" className="heading">
                        <h3>Shop Now</h3>
                    </a>
                </div>
                <div className="box" id="box-2">
                    <h3>New Collection</h3>
                    <h1>The Summer Sale Off 50%</h1>
                    <a href="#section-one" className="heading">
                        <h3>Shop Now</h3>
                    </a>
                </div>
            </div>

            <div id="choice">
                <div className="box" id="box-1">
                    <img src="../src/images/bg-img/bg-17.webp" alt="" />
                    <div className="info">
                        <h2>Running Shoes</h2>
                        <Link to={'/men'} className='navlink'>
                        <a href="">shop now<div className="line"></div></a>
                        </Link>
                    </div>
                </div>
                <div className="box" id="box-2">
                    <img src="../src/images/bg-img/bg-18.webp" alt="" />
                    <div className="info">
                        <h2>Basic Collection</h2>
                        <a href="#section-one">shop now<div className="line"></div></a>
                    </div>
                </div>
                <div className="box" id="box-3">
                    <img src="../src/images/bg-img/bg-19.webp" alt="" />
                    <div className="info">
                        <h2>Sport Shoes</h2>
                        <Link to={'/sports'} className='navlink'>
                        shop now<div className="line"></div>
                        </Link>
                    </div>
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
                    <Link to={'/sports'} className='navlink'>
                    <button className="homebtn btn-sm">Shop Now</button>
                    </Link>
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
                {HomeProductCompare.map(shoe => (
                    <div className={`box ${shoe.n === 2 || shoe.n === 5 || shoe.n === 8 ? 'middle' : ''} ${shoe.n >= 10 ? 'bottom' : ''}`} key={shoe.n}>
                        <img src={shoe.image.shoe1} alt={shoe.name} />
                        <div className="info">
                            <div className="name">
                                <Link to={`/shoe/${shoe.id}`}>
                                    <h2>{shoe.name}</h2>
                                </Link>
                            </div>
                            <h2 className="price">{shoe.price}</h2> &nbsp;
                            {shoe.discountedPrice && <span>{shoe.discountedPrice}</span>}
                        </div>
                    </div>
                ))}
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
                            <a href="https://www.instagram.com/web.cbum/" target='_blank'><img src="../src/images/social-icon-img/instagram.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="box" id="box-2">
                        <div className="bg-back">
                            <img src="../src/images/instra-img/img-2.webp" alt="" />
                        </div>
                        <div className="bg-upper">
                            <a href="https://www.instagram.com/web.cbum/" target='_blank'><img src="../src/images/social-icon-img/instagram.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="box" id="box-3">
                        <div className="bg-back">
                            <img src="../src/images/instra-img/img-3.webp" alt="" />
                        </div>
                        <div className="bg-upper">
                            <a href="https://www.instagram.com/web.cbum/" target='_blank'><img src="../src/images/social-icon-img/instagram.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="box" id="box-4">
                        <div className="bg-back">
                            <img src="../src/images/instra-img/img-4.webp" alt="" />
                        </div>
                        <div className="bg-upper">
                            <a href="https://www.instagram.com/web.cbum/" target='_blank'><img src="../src/images/social-icon-img/instagram.svg" alt="" /></a>
                        </div>
                    </div>
                    <div className="box" id="box-5">
                        <div className="bg-back">
                            <img src="../src/images/instra-img/img-5.webp" alt="" />
                        </div>
                        <div className="bg-upper">
                            <a href="https://www.instagram.com/web.cbum/" target='_blank'><img src="../src/images/social-icon-img/instagram.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home