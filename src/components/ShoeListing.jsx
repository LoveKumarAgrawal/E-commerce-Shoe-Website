// import React from 'react'

// function ShoeListing() {
//   return (
//     <div className="full-container">
//         <div className="container">
//             <div className="shoes-container">
//                 <img src="src/images/three-shoe/shoes-1.png" alt="" id="img1" className="ani-1 ani-11"/>
//                 <img src="src/images/three-shoe/shoes-2.png" alt="" id="img2" className="ani-2 ani-22"/>
//                 <img src="src/images/three-shoe/shoes-3.png" alt="" id="img3" className="ani-3 ani-33"/>
//             </div>
//             <div className="info-container">
//                 <h2>Women's shoes</h2>
//                 <h1>NIKE PEGASUS <br/> DZ2539-500</h1>
//                 <h2>$210</h2>
//                 <p>Whatever your "why" is for working out, the Metcon 9 makes it all worth it. We improved on the 8 with
//                     a
//                     larger Hyperlift plate and added rubber rope wrap. Intended for lifters, trainers and go-getters,
//                     some
//                     of the greatest athletes in the world swear by it, and it's still the gold standard that delivers
//                     day
//                     after day</p>
//                 <div className="info-img">
//                     <img src="src/images/three-shoe/shoes-1.png" alt="" id="hover-img1"/>
//                     <img src="src/images/three-shoe/shoes-2.png" alt="" id="hover-img2"/>
//                     <img src="src/images/three-shoe/shoes-3.png" alt="" id="hover-img3"/>
//                 </div>
//                 <div className="img-bottom-line" id="img-hover-line"></div>
//                 <div className="bottom">
//                     <p className="size">Select Size</p>
//                     <select name="size" id="shoes-size">
//                         <option value="8.5" selected> US 8.5</option>
//                         <option value="8.5" selected> US 9.0</option>
//                         <option value="8.5" selected> US 9.5</option>
//                     </select>
//                     <button className="btn"><img src="img/logo/shopping.svg" alt=""/>Add to Cart</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ShoeListing


import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Home/HomeProducts';
import { v4 as uuidv4 } from 'uuid'
import { databases } from '../appwrite/appwriteConfig'
import '../css/shoelisting.css'
import { useSelector } from 'react-redux';
import conf from '../conf/conf.js';

function ShoeListing() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const hoverImg1Ref = useRef(null);
  const hoverImg2Ref = useRef(null);
  const hoverImg3Ref = useRef(null);
  const imgLineRef = useRef(null);

  useEffect(() => {
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    const img3 = img3Ref.current;
    const hoverImg1 = hoverImg1Ref.current;
    const hoverImg2 = hoverImg2Ref.current;
    const hoverImg3 = hoverImg3Ref.current;
    const imgLine = imgLineRef.current;


    let flag = 0;
    
    img1.classList.remove("ani-1");
    img2.classList.remove("ani-2");
    img3.classList.remove("ani-3");
    img3.classList.remove("ani-33");
    img2.classList.remove("ani-22");
    img1.classList.remove("ani-11");
    
    hoverImg1.addEventListener("click", () => {
      
      if (flag == 3) {
        img1.style.transform = "rotate(380deg)";
        img2.style.transform = "rotate(380deg)";
        img3.style.transform = "rotate(380deg)";
        flag = 0;
        
      }
      
      img2.classList.remove("ani-2");
      img1.classList.remove("ani-1");
      img3.classList.remove("ani-3");
      imgLine.style.transform = "translate(47px,-68px)";
      
      
    });
    
    
    hoverImg2.addEventListener("click", () => {
      img2.classList.add("ani-2");
      img1.classList.add("ani-1");
      img3.classList.add("ani-3");
      
      img3.classList.remove("ani-33");
      img2.classList.remove("ani-22");
      img1.classList.remove("ani-11");
      
      imgLine.style.transform = "translate(214px,-68px)";
      
      flag = 2;
    });


    hoverImg3.addEventListener("click", () => {
      img2.classList.add("ani-2");
      img1.classList.add("ani-1");
      img3.classList.add("ani-3");
      
      img3.classList.add("ani-33");
      img2.classList.add("ani-22");
      img1.classList.add("ani-11");
      
      imgLine.style.transform = "translate(378px,-68px)";
      flag = 3;
    });


  }, []);
  
  const { id } = useParams();
  const shoe = Products.find((item) => item.id === id);

  const [selectedImage, setSelectedImage] = useState(shoe.image.shoe1);
  const [selectedColor, setSelectedColor] = useState('shoe1');
  const [shoesize, setShoeSize] = useState('8.5');

  console.log(typeof selectedColor);

  const handleImageClick = (image, color) => {
    setSelectedImage(image);
    setSelectedColor(color);
  };
  const handleSizeChange = (e) => {
    setShoeSize(e.target.value);
  };
  
  console.log(conf.appwriteUrl);
  
  const authStatus = useSelector((state) => state.auth.status)
  const handleSubmit = (e) => {
      // e.preventDefault()
      // setProduct(shoe)
      if(authStatus){
        const promise = databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, uuidv4(),
        {
          id: shoe.id,
          image: selectedImage,
          name: shoe.name,
          price: shoe.price,
          color: shoe.color[selectedColor],
          size: shoesize
        })
      promise.then(
        function (response) {
          console.log(response);
        },
        function (error) {
          console.log(error);
        }
      )
      } else {
        console.log(conf.appwriteCollectionId);
        alert("Login to use this feature")
      }

    }

    


  return (
    <div className="full-container">
      <div className="container">
        <div className="shoes-container">
          <img src={shoe.image.shoe1} alt="" ref={img1Ref} id='img1' className="ani-1 ani-11" />
          <img src={shoe.image.shoe2} alt="" ref={img2Ref} id='img2' className="ani-2 ani-22" />
          <img src={shoe.image.shoe3} alt="" ref={img3Ref} id='img3' className="ani-3 ani-33" />
        </div>
        <div className="info-container">
          <h2>{shoe.name}</h2>
          <h1>NIKE PEGASUS <br /> DZ2539-500</h1>
          <h2>{shoe.price}</h2>
          <p>Whatever your "why" is for working out, the Metcon 9 makes it all worth it. We improved on the 8 with
            a
            larger Hyperlift plate and added rubber rope wrap. Intended for lifters, trainers and go-getters,
            some
            of the greatest athletes in the world swear by it, and it's still the gold standard that delivers
            day
            after day</p>
          <div className="info-img">
            <img src={shoe.image.shoe1} alt="" ref={hoverImg1Ref} id="hover-img1" onClick={() => handleImageClick(shoe.image.shoe1, 'shoe1')} />
            <img src={shoe.image.shoe2} alt="" ref={hoverImg2Ref} id="hover-img2" onClick={() => handleImageClick(shoe.image.shoe2, 'shoe2')} />
            <img src={shoe.image.shoe3} alt="" ref={hoverImg3Ref} id="hover-img3" onClick={() => handleImageClick(shoe.image.shoe3, 'shoe3')} />
          </div>
          <div className="img-bottom-line" ref={imgLineRef}></div>
          <div className="bottom">
            <p className="size">Select Size</p>
            <select name="size" id="shoes-size" value={shoesize} onChange={handleSizeChange} >
              <option value="8.5" > US 8.5</option>
              <option value="9.0" > US 9.0</option>
              <option value="9.5" > US 9.5</option>
            </select>
            {/* <Link to={'/addtocart'}> */}
            <button className="shoelistingbtn" onClick={handleSubmit}><img src="img/logo/shopping.svg" alt="" />Add to Cart</button>

            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>

  );
}

export default ShoeListing;

