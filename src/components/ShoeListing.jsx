import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './Home/HomeProducts';
import MenProduct from './Men/MenProduct';
import WomenProduct from './Women/WomenProducts';
import SportsProduct from './Sports/SportsProducts';
import { v4 as uuidv4 } from 'uuid'
import { databases, account } from '../appwrite/appwriteConfig'
import '../css/shoelisting.css'
import { useSelector } from 'react-redux';
import conf from '../conf/conf.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Query } from 'appwrite';

function ShoeListing() {
  useEffect(() => {
    fetchProducts();
    window.scrollTo(0, 0); 
},[]);
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
      imgLine.style.transform = "translate(32px,-55px)";
      
      
    });
    
    
    hoverImg2.addEventListener("click", () => {
      img2.classList.add("ani-2");
      img1.classList.add("ani-1");
      img3.classList.add("ani-3");
      
      img3.classList.remove("ani-33");
      img2.classList.remove("ani-22");
      img1.classList.remove("ani-11");
      
      imgLine.style.transform = "translate(172px,-55px)";
      
      flag = 2;
    });


    hoverImg3.addEventListener("click", () => {
      img2.classList.add("ani-2");
      img1.classList.add("ani-1");
      img3.classList.add("ani-3");
      
      img3.classList.add("ani-33");
      img2.classList.add("ani-22");
      img1.classList.add("ani-11");
      
      imgLine.style.transform = "translate(311px,-55px)";
      flag = 3;
    });


  }, []);
  const [products, setProducts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status)
  const userId = useSelector(state => state.auth.userData)
  const { id } = useParams();
  const shoe = Products.find((item) => item.id === id) || MenProduct.find((item) => item.id === id) || WomenProduct.find((item) => item.id === id) || SportsProduct.find((item) => item.id === id);

  const [selectedImage, setSelectedImage] = useState(shoe.image.shoe1);
  const [selectedColor, setSelectedColor] = useState('shoe1');
  const [shoesize, setShoeSize] = useState('9');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(products.length===20){
      toast.error("The cart is full", {autoClose: 3000})
    } else {
      // Check if the product already exists in the cart
    const isProductExists = products.some(product => product.id === shoe.id && product.image === selectedImage && product.size === shoesize && product.color === shoe.color[selectedColor]);

    if (isProductExists) {
        toast.error("Product already exists in the cart", { autoClose: 3000 })
    } else {
        if (authStatus) {
            const promise = databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, uuidv4(), {
                id: shoe.id,
                image: selectedImage,
                name: shoe.name,
                price: shoe.price,
                color: shoe.color[selectedColor],
                size: shoesize,
                userid: userId
            });

            promise.then(
                function (response) {
                    toast.success("The product is added to cart", { autoClose: 3000 });
                    console.log(response);
                    fetchProducts();
                },
                function (error) {
                    console.log(error);
                }
            );
        } else {
            toast.error("Login to use this feature", { autoClose: 3000 });
        }
    }
    
    }
}

const fetchProducts = () => {
  const getProducts = databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId,[Query.equal('userid',userId)]);
  getProducts.then(
    function (response) {
      // const userProducts = response.documents.filter(product => product.userid === userId);
      setProducts(response.documents);
    },
    function (error) {
      console.log(error);
    }
  );
};

  const handleImageClick = (image, color) => {
    setSelectedImage(image);
    setSelectedColor(color);
  };
  const handleSizeChange = (e) => {
    setShoeSize(e.target.value);
  };
  
  

  

  return (
    <div className="full-container">
      <div className="container">
        <div className="shoes-container">
          <img src={shoe.image.shoe1} alt="" ref={img1Ref} id='img1' className="ani-1 ani-11" />
          <img src={shoe.image.shoe2} alt="" ref={img2Ref} id='img2' className="ani-2 ani-22" />
          <img src={shoe.image.shoe3} alt="" ref={img3Ref} id='img3' className="ani-3 ani-33" />
        </div>
        <div className="info-container">
          <h2>ShoeSavvy</h2>
          <h1>{shoe.name}</h1>
          <h2>₹{shoe.price}</h2>
          <p>We improved on the 8 with a larger Hyperlift plate and added rubber rope wrap. Intended for lifters,
            trainers and go-getters, some of the greatest athletes in the world swear by it, and it's still the
            gold standard that delivers day after day</p>
          <div className="info-img">
            <img src={shoe.image.shoe1} alt="" ref={hoverImg1Ref} id="hover-img1" onClick={() => handleImageClick(shoe.image.shoe1, 'shoe1')} />
            <img src={shoe.image.shoe2} alt="" ref={hoverImg2Ref} id="hover-img2" onClick={() => handleImageClick(shoe.image.shoe2, 'shoe2')} />
            <img src={shoe.image.shoe3} alt="" ref={hoverImg3Ref} id="hover-img3" onClick={() => handleImageClick(shoe.image.shoe3, 'shoe3')} />
          </div>
          <div className="img-bottom-line" ref={imgLineRef}></div>
          <div className="bottom">
            <p className="size">Select Size</p>
            <select name="size" id="shoes-size" value={shoesize} onChange={handleSizeChange} >
              <option value="6"> 6</option>
              <option value="7"> 7</option>
              <option value="8"> 8</option>
              <option value="9" > 9</option>
              <option value="10"> 10</option>
            </select>
            {/* <Link to={'/addtocart'}> */}
            <button className="shoelistingbtn" onClick={handleSubmit}><img src="img/logo/shopping.svg" alt="" />Add to Cart</button>
            <ToastContainer />

            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoeListing;

