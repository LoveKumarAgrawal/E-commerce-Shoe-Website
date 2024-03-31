// import React,{useState, useEffect} from 'react'
// import {databases} from '../appwrite/appwriteConfig'
// import '../css/addtocart.css'
// import Navbar from './Nav' 

// function AddToCart() {
//   const [products, setProducts] = useState()
//   useEffect(() => {
//     setLoader(true)
//     const getProducts = databases.listDocuments("65ffb0bb84dd34e31acb","65ffb0f8470b67963cab")

//     getProducts.then(
//       function(response){
//         setProducts(response.documents)
//       },
//       function(error){
//         console.log(error);
//       }
//     )
//   },[])

//   return (
//     <>
//     <Navbar />
//     {
//         products && <div id="cart-container">
//         <div id="cart">
//             <div className="top">
//                 <h1>Shopping Cart</h1>
//                 <h4>Price</h4>
//             </div>
//             <div className="center">
//                 <div className="left">
//                     <img src="products." alt=""/>
//                 </div>
//                 <div className="middle">
//                     <h2 id="shoe-name">Shoes MT</h2>
//                     <p>In stock</p>
//                     <h4>Size:&nbsp;<span id="size">7 uk</span></h4>
//                     <h4>Colour:&nbsp;<span id="colour">grey</span></h4>
//                     <div className="qty-delete">
//                         <label for="qty">Qty:</label>
//                         <select name="myqty" id="qty">
//                             <option value="0">0 (Delete)</option> 
//                             <option value="1" selected>1</option>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                             <option value="5">5</option>
//                             <option value="6">6</option>
//                             <option value="7">7</option>
//                             <option value="8">8</option>
//                             <option value="9">9</option>
//                         </select>
//                         <button className="btn-delete">Delete</button>
//                     </div>
//                 </div>
//                 <div className="right">
//                     <h4 id="offer">20% off</h4>
//                     <h4 id="deal">Limited time deal</h4>
//                     <h4 id="price">$22.00</h4>
//                     <h4 id="mrp">M.R.P.:&nbsp;<span id="mrp-price">{products.price}</span></h4>
//                 </div>
//             </div>
//             <div className="center">
//                 <div className="left">
//                     <img src="/ShoeSavvy/img/shoes-img/shoe-2.webp" alt=""/>
//                 </div>
//                 <div className="middle">
//                     <h2 id="shoe-name">{products.name}</h2>
//                     <p>In stock</p>
//                     <h4>Size:&nbsp;<span id="size">{products.size}</span></h4>
//                     <h4>Colour:&nbsp;<span id="colour">{products.color}</span></h4>
//                     <div className="qty-delete">
//                         <label for="qty">Qty:</label>
//                         <select name="myqty" id="qty">
//                             <option value="0">0 (Delete)</option>
//                             <option value="1" selected>1</option>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                             <option value="5">5</option>
//                             <option value="6">6</option>
//                             <option value="7">7</option>
//                             <option value="8">8</option>
//                             <option value="9">9</option>
//                         </select>
//                         <button className="btn-delete">Delete</button>
//                     </div>
//                 </div>
//                 <div className="right">
//                     <h4 id="offer">20% off</h4>
//                     <h4 id="deal">Limited time deal</h4>
//                     <h4 id="price">$22.00</h4>
//                     <h4 id="mrp">M.R.P.:&nbsp;<span id="mrp-price">$24.00</span></h4>
//                 </div>
//             </div>
//             <div className="bottom">
//                 <h2>Subtotal (<span id="no_of_item">3</span>&nbsp;items):&nbsp;<span id="total">$120.00</span></h2>
//             </div>
//         </div>
//     </div>
//     }
    
//     </>
//   )
// }

// export default AddToCart


// import React, { useState, useEffect } from 'react';
// import { databases } from '../appwrite/appwriteConfig';
// import '../css/addtocart.css';
// import Navbar from './Nav';

// function AddToCart() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = databases.listDocuments("65ffb0bb84dd34e31acb", "65ffb0f8470b67963cab");

//     getProducts.then(
//       function (response) {
//         setProducts(response.documents);
//       },
//       function (error) {
//         console.log(error);
//       }
//     );
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div id="cart-container">
//         <div id="cart">
//           <div className="top">
//             <h1>Shopping Cart</h1>
//             <h4>Price</h4>
//           </div>
//           {products.map((product) => (
//             <div className="center" key={product.$id}>
//               <div className="left">
//                 <img src={product.image} alt="" />
//               </div>
//               <div className="middle">
//                 <h2 id="shoe-name">{product.name}</h2>
//                 <p>In stock</p>
//                 <h4>Size:&nbsp;<span id="size">{product.size}</span></h4>
//                 <h4>Colour:&nbsp;<span id="colour">{product.color}</span></h4>
//                 <div className="qty-delete">
//                   <label htmlFor="qty">Qty:</label>
//                   <select name="myqty" id="qty">
//                     <option value="0">0 (Delete)</option>
//                     <option value="1" selected>1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                     <option value="6">6</option>
//                     <option value="7">7</option>
//                     <option value="8">8</option>
//                     <option value="9">9</option>
//                   </select>
//                   <button className="btn-delete">Delete</button>
//                 </div>
//               </div>
//               <div className="right">
//                 <h4 id="offer">20% off</h4>
//                 <h4 id="deal">Limited time deal</h4>
//                 <h4 id="price">{product.price}</h4>
//                 <h4 id="mrp">M.R.P.:&nbsp;<span id="mrp-price">{product.price}</span></h4>
//               </div>
//             </div>
//           ))}
//           <div className="bottom">
//             <h2>Subtotal (<span id="no_of_item">{products.length}</span>&nbsp;items):&nbsp;<span id="total">$120.00</span></h2>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddToCart;

import React, { useState, useEffect } from 'react';
import { databases } from '../appwrite/appwriteConfig';
import '../css/addtocart.css';
import Navbar from './Nav';
import conf from '../conf/conf.js';

function AddToCart() {
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const getProducts = databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId);

    getProducts.then(
      function (response) {
        // Initialize quantity to 1 for each product
        const productsWithQuantity = response.documents.map(product => ({ ...product, quantity: 1 }));
        setProducts(productsWithQuantity);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    // Calculate subtotal based on product price and quantity
    const calculatedSubtotal = products.reduce((total, product) => {
      const productPrice = parseFloat(product.price.replace('$', '')); // Convert price string to number
      return total + (productPrice * product.quantity);
    }, 0);
    setSubtotal(calculatedSubtotal);
  }, [products]);

  const handleQuantityChange = (productId, newQuantity) => {
    // Update the quantity of the product
    const updatedProducts = products.map(product => {
      if (product.$id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const deleteProduct = (id) => {
    const promise = databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId, id)
    promise.then(
      function(response){
        console.log(response);
        window.location.reload()
      },
      function(error){
        console.log(error);
      }
    )
  }

  return (
    <>
      <Navbar />
      <div id="cart-container">
        <div id="cart">
          <div className="top">
            <h1>Shopping Cart</h1>
            <h4>Price</h4>
          </div>
          {products.map((product) => (
            <div className="center" key={product.$id}>
              <div className="left">
                <img src={product.image} alt="" />
              </div>
              <div className="middle">
                <h2 id="shoe-name">{product.name}</h2>
                <p>In stock</p>
                <h4>Size:&nbsp;<span id="size">{product.size}</span></h4>
                <h4>Colour:&nbsp;<span id="colour">{product.color}</span></h4>
                <div className="qty-delete">
                  <label htmlFor="qty">Qty:</label>
                  <select
                    name="myqty"
                    id="qty"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.$id, parseInt(e.target.value))}
                  >
                    {[...Array(10).keys()].map((value) => (
                      <option key={value} value={value + 1}>{value + 1}</option>
                    ))}
                  </select>
                  <button className="btn-delete" onClick={()=>{
                          deleteProduct(product.$id)
                        }}>Delete</button>
                </div>
              </div>
              <div className="right">
                <h4 id="offer">20% off</h4>
                <h4 id="deal">Limited time deal</h4>
                <h4 id="price">{product.price}</h4>
                <h4 id="mrp">M.R.P.:&nbsp;<span id="mrp-price">{product.price}</span></h4>
              </div>
            </div>
          ))}
          <div className="bottom">
            <h2>Subtotal (<span id="no_of_item">{products.length}</span>&nbsp;items):&nbsp;<span id="total">{subtotal.toFixed(2)}</span></h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
