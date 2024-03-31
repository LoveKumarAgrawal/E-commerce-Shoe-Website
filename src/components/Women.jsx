// import React from 'react'
// import '../css/women.css'
// import BestSellersProducts from './Women/WomenProducts'

// function Women() {
//     return (
//     <>
//       <div id="Womensection-one">
//         <div className="bg-img">
//         </div>
//         <div className="info">
//             <h2>Sport Shoes Store</h2>
//             <h1>Women's Shoes</h1>
//             <div>
//                 <a href="#Womensection-two">
//                     <button className="women-btn women-btn-sm">Shop Now</button>
//                 </a>
//             </div>
//         </div>
//     </div>

//     <div id="Womensection-two">
//         <button id="filter">Filter
//             <img src="/src/images/logo/down.svg" alt=""/>
//         </button>
//         <div className="sidebar sidebarGo">
//             <img className="cross cross-ani" src="/src/images/logo/cross.svg" alt="" width="17px"/>
//             <div className="info">
//                 <div className="range-container">
//                     <h3>Price</h3>
//                     <div className="price-range">
//                         <span className="range-min">₹ 0</span>
//                         <span>₹&nbsp;<input type="number" id="range-max" value="10000"/></span>
//                     </div>
//                     <input type="range" id="rangebar" min="0" value="10000" max="10000"/>
//                 </div>
//                 <div className="color-container">
//                     <h3>Color</h3>
//                     <div className="color-grid">
// <li className="color" id="color-1"></li>
// <li className="color" id="color-2"></li>
// <li className="color" id="color-3"></li>
// <li className="color" id="color-4"></li>
// <li className="color" id="color-5"></li>
// <li className="color" id="color-6"></li>
// <li className="color" id="color-7"></li>
// <li className="color" id="color-8"></li>
// <li className="color" id="color-9"></li>
// <li className="color" id="color-10"></li>
// <li className="color" id="color-11"></li>
// <li className="color" id="color-12"></li>
// <li className="color" id="color-13"></li>
// <li className="color" id="color-14"></li>
// <li className="color" id="color-15"></li>
// <li className="color" id="color-16"></li>
// <li className="color" id="color-17"></li>
// <li className="color" id="color-18"></li>
// <li className="color" id="color-19"></li>
// <li className="color" id="color-20"></li>
// <li className="color" id="color-21"></li>
// <li className="color" id="color-22"></li>
// <li className="color" id="color-23"></li>
// <li className="color" id="color-24"></li>
//                     </div>
//                 </div>
//                 <div className="size-container">
//                     <h3>Size</h3>
//                     <div className="size">
// <input type="checkbox" name="6" className="checkbox"/>&nbsp;6
// <br/>
// <input type="checkbox" name="7" className="checkbox"/>&nbsp;7
// <br/>
// <input type="checkbox" name="8" className="checkbox"/>&nbsp;8
// <br/>
// <input type="checkbox" name="9" className="checkbox"/>&nbsp;9
// <br/>
// <input type="checkbox" name="10" className="checkbox"/>&nbsp;10
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="heading">
//             <h2>Women's Products</h2>
//             <div className="line"></div>
//         </div>
//         <div className="shoe-container" id="shoe-container">

//         </div>
//     </div>
//     </>
//     )
// }

// export default Women


// import React, { useState } from 'react';
// import '../css/women.css';
// import BestSellersProducts from './Women/WomenProducts';
// import { Link } from 'react-router-dom';


// function Women() {
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     return (
//         <>
            // <div id="Womensection-one">
            //     <div className="bg-img">
            //     </div>
            //     <div className="info">
            //         <h2>Sport Shoes Store</h2>
            //         <h1>Women's Shoes</h1>
            //         <div>
            //             <a href="#Womensection-two">
            //                 <button className="women-btn women-btn-sm">Shop Now</button>
            //             </a>
            //         </div>
            //     </div>
            // </div>

//             <div id="Womensection-two">
//                 <button id="filter" onClick={toggleSidebar}>
//                     Filter <img src="/src/images/logo/down.svg" alt="" />
//                 </button>

//                 <div className={`sidebar ${sidebarOpen ? 'sidebarGo' : ''}`}>
//                     <img className="cross cross-ani" src="/src/images/logo/cross.svg" alt="" width="17px" />
//                     <div className="info">
//                         <div className="range-container">
//                             <h3>Price</h3>
//                             <div className="price-range">
//                                 <span className="range-min">₹ 0</span>
//                                 <span>₹&nbsp;<input type="number" id="range-max" value="10000" /></span>
//                             </div>
//                             <input type="range" id="rangebar" min="0" value="10000" max="10000" />
//                         </div>
                        // <div className="color-container">
                        //     <h3>Color</h3>
                        //     <div className="color-grid">
                        //         <li className="color" id="color-1"></li>
                        //         <li className="color" id="color-2"></li>
                        //         <li className="color" id="color-3"></li>
                        //         <li className="color" id="color-4"></li>
                        //         <li className="color" id="color-5"></li>
                        //         <li className="color" id="color-6"></li>
                        //         <li className="color" id="color-7"></li>
                        //         <li className="color" id="color-8"></li>
                        //         <li className="color" id="color-9"></li>
                        //         <li className="color" id="color-10"></li>
                        //         <li className="color" id="color-11"></li>
                        //         <li className="color" id="color-12"></li>
                        //         <li className="color" id="color-13"></li>
                        //         <li className="color" id="color-14"></li>
                        //         <li className="color" id="color-15"></li>
                        //         <li className="color" id="color-16"></li>
                        //         <li className="color" id="color-17"></li>
                        //         <li className="color" id="color-18"></li>
                        //         <li className="color" id="color-19"></li>
                        //         <li className="color" id="color-20"></li>
                        //         <li className="color" id="color-21"></li>
                        //         <li className="color" id="color-22"></li>
                        //         <li className="color" id="color-23"></li>
                        //         <li className="color" id="color-24"></li>
                        //     </div>
                        // </div>
                        // <div className="size-container">
                        //     <h3>Size</h3>
                        //     <div className="size">
                        //         <input type="checkbox" name="6" className="checkbox" />&nbsp;6
                        //         <br />
                        //         <input type="checkbox" name="7" className="checkbox" />&nbsp;7
                        //         <br />
                        //         <input type="checkbox" name="8" className="checkbox" />&nbsp;8
                        //         <br />
                        //         <input type="checkbox" name="9" className="checkbox" />&nbsp;9
                        //         <br />
                        //         <input type="checkbox" name="10" className="checkbox" />&nbsp;10
                        //     </div>
                        // </div>
//                     </div>
//                 </div>

//                 <div className="heading">
//                     <h2>Women's Products</h2>
//                     <div className="line"></div>
//                 </div>

//                 <div className="shoe-container" id="shoe-container">
//                 {BestSellersProducts.map((shoe) => (
//                         <div className="shoe-group" key={shoe.id}>
//                             <Link to={`/shoe/${shoe.id}`}>
//                                 <div className="shoe-item" id={shoe.id}>
//                                     <img className="shoe-item-img" src={shoe.image.shoe1} alt={shoe.name} />
//                                     <div className="social-icons">
//                                         <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
//                                             <img className="icon" src="/src/images/social-icon-img/menu.svg" alt="" />
//                                         </a>
//                                         <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
//                                             <img className="icon" src="/src/images/social-icon-img/search.svg" alt="" />
//                                         </a>
//                                         <a href="#" className="icon" onClick={(e) => e.preventDefault()}>
//                                             <img className="icon" src="/src/images/social-icon-img/like.svg" alt="" />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </Link>
//                             <h3>{shoe.name}</h3>
//                             <p>{shoe.price}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Women;

import React, { useState } from 'react';
import '../css/women.css';
import BestSellersProducts from './Women/WomenProducts';
import { Link } from 'react-router-dom'

function Women() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

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
                                <span>₹&nbsp;<input type="number" id="range-max" value="10000" /></span>
                            </div>
                            <input type="range" id="rangebar" min="0" value="10000" max="10000" />
                        </div>
                        <div className="color-container">
                            <h3>Color</h3>
                            <div className="color-grid">
                                <li className="color" id="color-1"></li>
                                <li className="color" id="color-2"></li>
                                <li className="color" id="color-3"></li>
                                <li className="color" id="color-4"></li>
                                <li className="color" id="color-5"></li>
                                <li className="color" id="color-6"></li>
                                <li className="color" id="color-7"></li>
                                <li className="color" id="color-8"></li>
                                <li className="color" id="color-9"></li>
                                <li className="color" id="color-10"></li>
                                <li className="color" id="color-11"></li>
                                <li className="color" id="color-12"></li>
                                <li className="color" id="color-13"></li>
                                <li className="color" id="color-14"></li>
                                <li className="color" id="color-15"></li>
                                <li className="color" id="color-16"></li>
                                <li className="color" id="color-17"></li>
                                <li className="color" id="color-18"></li>
                                <li className="color" id="color-19"></li>
                                <li className="color" id="color-20"></li>
                                <li className="color" id="color-21"></li>
                                <li className="color" id="color-22"></li>
                                <li className="color" id="color-23"></li>
                                <li className="color" id="color-24"></li>
                            </div>
                        </div>
                        <div className="size-container">
                            <h3>Size</h3>
                            <div className="size">
                                <input type="checkbox" name="6" className="checkbox" />&nbsp;6
                                <br />
                                <input type="checkbox" name="7" className="checkbox" />&nbsp;7
                                <br />
                                <input type="checkbox" name="8" className="checkbox" />&nbsp;8
                                <br />
                                <input type="checkbox" name="9" className="checkbox" />&nbsp;9
                                <br />
                                <input type="checkbox" name="10" className="checkbox" />&nbsp;10
                            </div>
                        </div>
                    </div>
                </div>

                <div className="heading">
                    <h2>Women's Products</h2>
                    <div className="line"></div>
                </div>

                <div className="shoe-container" id="shoe-container">
                {BestSellersProducts.map((shoe) => (
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
    );
}

export default Women;
