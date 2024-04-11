import React, { useState, useEffect } from 'react';
import '../css/women.css';
import products from './Women/WomenProducts';
import { Link } from 'react-router-dom'

function Women() {
    useEffect(() => {
        window.scrollTo(0, 0); 
    },[]);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [filterShoe, setFilterShoe] = useState(false);
    const [filterPrice, setFilterPrice] = useState(10000); // Default max price
    const [selectedColor, setSelectedColor] = useState(null);
    const colors = ['white', 'beige', 'yellow', 'orange', 'black', 'brown', 'pink', 'blue', 'green', 'purple'];

    // Function to toggle sidebar and reset filters
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        setFilterShoe(!filterShoe);
        setFilterPrice(10000); // Reset price filter
        setSelectedColor(null); // Reset color filter
    };
    
    // Function to handle price range change
    const handlePriceChange = (event) => {
        setFilterPrice(parseInt(event.target.value));
    };

    // Function to handle color selection
    const handleColorChange = (color) => {
        console.log("Selected color:", color);
        setSelectedColor(color); // Set the selected color
    };
    // Function to filter products based on price and selected colors
    const filterProducts = (product) => {
        if (product.price <= filterPrice) {
            if (!selectedColor) {
                return true; // No color filter applied
            } else {
                console.log(Object.values(product.color));
                // Check if the product's color matches the selected color
                return Object.values(product.color).includes(selectedColor);
            }
        }
        return false;
    };


    if (!products || products.length === 0) {
        return <div>No products available</div>;
    }


    return (
        <>
            <div id="Womensection-one">
                <div className="bg-img">
                </div>
                <div className="info">
                    <h2>Sport Shoes Store</h2>
                    <h1>Women's Shoes</h1>
                    <div>
                        <a href="#Womensection-two">
                            <button className="women-btn women-btn-sm">Shop Now</button>
                        </a>
                    </div>
                </div>
            </div>

            <div id="Womensection-two">
                <button id="filter" onClick={toggleSidebar} style={{ display: sidebarOpen ? 'inline' : 'none' }}>
                    Filter <img src="/src/images/logo/down.svg" alt=""  />
                </button>

                <div className={`sidebar ${sidebarOpen ? 'sidebarGo' : ''}`}>
                    <img className="cross cross-ani" src="/src/images/logo/cross.svg" alt="" width="17px" onClick={toggleSidebar} />
                    <div className="info">
                        <div className="range-container">
                            <h3>Price</h3>
                            <div className="price-range">
                                <span className="range-min">₹ 0</span>
                                <span>₹&nbsp;<input type="number" id="range-max" value={filterPrice} onChange={handlePriceChange} /></span>
                            </div>
                            <input type="range" id="rangebar" min="0" value={filterPrice} max="10000" onChange={handlePriceChange} />
                        </div>
                        <div className="color-container">
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
                    <h2>Women's Products</h2>
                    <div className="line"></div>
                </div>

                <div className={`shoe-container ${filterShoe ? 'filter-shoe' : ''}`} id="shoe-container">
                {products
                        .filter(filterProducts) // Apply filters
                        .map((shoe) => (
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

export default Women;
