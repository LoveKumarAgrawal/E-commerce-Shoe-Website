import React, { useState } from 'react';
import '../css/men.css';
import Menproducts from './Men/MenProduct'
import { Link } from 'react-router-dom'

function Men() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [filterShoe, setFilterShoe] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        setFilterShoe(!filterShoe);
    };

  return (
    <>
       <div id="Mensection-one">
        <div class="box" id="box-1">
            <div class="inner-box" id="inner-box1">
                <h1>Flat 30%</h1>
                <h2>Season Offer</h2>
                <a href="#mensection-two">Discover More</a>
            </div>
        </div>
        <div class="box" id="box-2">
            <div class="inner-box" id="inner-box2">
                <h1>Flat 30%</h1>
                <h2>Season Offer</h2>
                <a href="#mensection-two">Discover More</a>
            </div>
        </div>
        <div class="box" id="box-3">
            <div class="inner-box" id="inner-box3">
                <h1>Flat 30%</h1>
                <h2>Season Offer</h2>
                <a href="#mensection-two">Discover More</a>
            </div>
        </div>
    </div>

    <div id="mensection-two">
        <button id="filter" onClick={toggleSidebar} style={{ display: sidebarOpen ? 'inline' : 'none' }}>Filter
            <img src="src/images/logo/down.svg" alt=""/>
        </button>
        <div className={`sidebar ${sidebarOpen ? 'sidebarGo' : ''}`}>
                <img className="cross cross-ani" src="/src/images/logo/cross.svg" alt="" width="17px" onClick={toggleSidebar} />
            <div class="info">
                <div class="range-container">
                    <h3>Price</h3>
                    <div class="price-range">
                        <span class="range-min">₹ 0</span>
                        <span>₹&nbsp;<input type="number" id="range-max" value="10000"/></span>
                    </div>
                    <input type="range" id="rangebar" min="0" value="10000" max="10000"/>
                </div>
                <div class="color-container">
                    <h3>Color</h3>
                    <div class="color-grid">
                        <li class="color" id="color-1"></li>
                        <li class="color" id="color-2"></li>
                        <li class="color" id="color-3"></li>
                        <li class="color" id="color-4"></li>
                        <li class="color" id="color-5"></li>
                        <li class="color" id="color-6"></li>
                        <li class="color" id="color-7"></li>
                        <li class="color" id="color-8"></li>
                        <li class="color" id="color-9"></li>
                        <li class="color" id="color-10"></li>
                        <li class="color" id="color-11"></li>
                        <li class="color" id="color-12"></li>
                        <li class="color" id="color-13"></li>
                        <li class="color" id="color-14"></li>
                        <li class="color" id="color-15"></li>
                        <li class="color" id="color-16"></li>
                        <li class="color" id="color-17"></li>
                        <li class="color" id="color-18"></li>
                        <li class="color" id="color-19"></li>
                        <li class="color" id="color-20"></li>
                        <li class="color" id="color-21"></li>
                        <li class="color" id="color-22"></li>
                        <li class="color" id="color-23"></li>
                        <li class="color" id="color-24"></li>
                    </div>
                </div>
                <div class="size-container">
                    <h3>Size</h3>
                    <div class="size">
                        <input type="checkbox" name="6" class="checkbox"/>&nbsp;6
                        <br/>
                        <input type="checkbox" name="7" class="checkbox"/>&nbsp;7
                        <br/>
                        <input type="checkbox" name="8" class="checkbox"/>&nbsp;8
                        <br/>
                        <input type="checkbox" name="9" class="checkbox"/>&nbsp;9
                        <br/>
                        <input type="checkbox" name="10" class="checkbox"/>&nbsp;10
                    </div>
                </div>
            </div>
        </div>
        <div class="heading">
            <h2>Men's Products</h2>
            <div class="line"></div>
        </div>
        <div className={`shoe-container ${filterShoe ? 'filter-shoe' : ''}`} id="shoe-container">
                {Menproducts.map((shoe) => (
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
                            <p>{shoe.price}</p>
                        </div>
                    ))}
                </div>
        
    </div>
    </> 
  )
}

export default Men