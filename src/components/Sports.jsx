import React, { useState } from 'react';
import '../css/sports.css';
import SportsProduct from './Sports/SportsProducts';
import { Link } from 'react-router-dom';

function Sports() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [filterShoe, setFilterShoe] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null); // State for selected color
    const colors = ['white', 'beige', 'yellow', 'orange', 'black', 'brown', 'pink', 'blue', 'green', 'purple'];

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        setFilterShoe(!filterShoe);
    };

    // Function to handle color selection
    const handleColorChange = (color) => {
        console.log("Selected color:", color);
        setSelectedColor(color); // Set the selected color
    };

    // Function to filter products based on selected color
    const filterProducts = (product) => {
        if (!selectedColor) {
            return true; // No color filter applied
        } else {
            // Check if the product's color matches the selected color
            return Object.values(product.color).includes(selectedColor);
        }
    };

    return (
        <>
            <div id="sport-section1">
            <div class="box" id="box-1">
                    <a href="#sport-section2">
                        <div class="name">
                            <h2>Hiking Shoes</h2>
                        </div>
                        <img src="src/images/bg-img/bg-20.webp" alt="" />
                    </a>
                </div>
                <div class="box" id="box-2">
                    <a href="#sport-section2">
                        <div class="name">
                            <h2>Running Shoes</h2>
                        </div>
                        <img src="src/images/bg-img/bg-21.webp" alt="" />
                    </a>
                </div>
                <div class="box" id="box-3">
                    <a href="#sport-section2">
                        <div class="name">
                            <h2>Soccer Shoes</h2>
                        </div>
                        <img src="src/images/bg-img/bg-22.webp" alt="" />
                    </a>
                </div>
                <div class="box" id="box-4">
                    <a href="#sport-section2">
                        <div class="name">
                            <h2>Tennis Shoes</h2>
                        </div>
                        <img src="src/images/bg-img/bg-23.webp" alt="" />
                    </a>
                </div>
            </div>
            <div id="sport-section2">
                <button id="filter" onClick={toggleSidebar} style={{ display: sidebarOpen ? 'inline' : 'none' }}>Filter
                    <img src="src/images/logo/down.svg" alt="" />
                </button>
                <div className={`sidebar ${sidebarOpen ? 'sidebarGo' : ''}`}>
                <img className="cross cross-ani" src="/src/images/logo/cross.svg" alt="" width="17px" onClick={toggleSidebar} />
                    <div class="info">
                        <div class="range-container">
                            <h3>Price</h3>
                            <div class="price-range">
                                <span class="range-min">₹ 0</span>
                                <span>₹&nbsp;<input type="number" id="range-max" value="10000" /></span>
                            </div>
                            <input type="range" id="rangebar" min="0" value="10000" max="10000" />
                        </div>
                        <div class="color-container">
                            <h3>Color</h3>
                            <div className="color-grid">
                                {colors.map((color) => (
                                    <li
                                        className={`color ${selectedColor === color ? 'selected' : ''}`}
                                        id={`color-${color}`}
                                        style={{ borderColor: selectedColor === color ? 'red' : 'transparent', borderWidth: '2px', borderStyle: 'solid',backgroundColor: color }}
                                        onClick={() => handleColorChange(color)}
                                        key={color}
                                    ></li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heading">
                    <h2>Sport Shoes</h2>
                    <div className="line"></div>
                </div>
                <div className={`shoe-container ${filterShoe ? 'filter-shoe' : ''}`} id="shoe-container">
                    {SportsProduct.filter(filterProducts).map((shoe) => (
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
                            <p>&#x20B9; {shoe.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Sports;
