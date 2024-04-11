import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { account } from '../appwrite/appwriteConfig';
import { v4 as uuidv4 } from 'uuid';
import '../css/signup.css'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {login as authlogin} from '../store/authSlice'

function Signup() {
  const location = useLocation();
  const [activeForm, setActiveForm] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const form = searchParams.get('form');
    if (form === 'login') {
      setActiveForm('login');
    } else {
      setActiveForm('signup');
    }
  }, [location.search]);

  useEffect(() => {
    const container = document.getElementById("signupcontainer");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    const handleRegisterClick = () => {
      container.classList.add("active");
    };

    const handleLoginClick = () => {
      container.classList.remove("active");
    };

    // Initially toggle the form based on the activeForm state
    if (activeForm === 'signup') {
      handleRegisterClick();
    } else {
      handleLoginClick();
    }

    registerBtn.addEventListener("click", handleRegisterClick);
    loginBtn.addEventListener("click", handleLoginClick);

    return () => {
      registerBtn.removeEventListener("click", handleRegisterClick);
      loginBtn.removeEventListener("click", handleLoginClick);
    };
  }, [activeForm]);


  const navigate = useNavigate()
  const loginnavigate = useNavigate();
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  //Signup
  const signupUser = async (e) => {
    e.preventDefault()

    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name
    );

    promise.then(
      async function (response) {
        // After successful signup, create session and get current user
        await account.createEmailPasswordSession(user.email, user.password);
        const currentUser = await account.get('current');
        
        // Dispatch action with current user ID
        dispatch(authlogin(currentUser.$id));
        
        // Navigate to desired location
        navigate("/");
      },
      function (error) {
        console.log(error);  // failure
      }
    );

  }
  const [loginuser, setLoginUser] = useState({
    email: "",
    password: ""
  })

  // Login
  const loginUser = async (e) => {
    e.preventDefault()
    try {
      await account.createEmailPasswordSession(loginuser.email, loginuser.password)
      const r = await account.get('current')
      dispatch(authlogin(r.$id))
      loginnavigate("/")
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='signupMainContainer'>
      <div className="signupcontainer" id="signupcontainer">
        <div className="signupform-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icons"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icons"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icons"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icons"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name" onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value
              })
            }} />
            <input type="email" placeholder="Email" onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value
              })
            }} />
            <input type="password" placeholder="Password" onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value
              })
            }} />
            <button onClick={signupUser}>Sign Up</button>
          </form>
        </div>
        <div className="signupform-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icons"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icons"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icons"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icons"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" onChange={(e)=>{
                        setLoginUser({
                            ...loginuser,
                            email:e.target.value
                        })
                    }} />
            <input type="password" placeholder="Password" onChange={(e)=>{
                        setLoginUser({
                            ...loginuser,
                            password:e.target.value
                        })
                    }} />
            <a href="#">Forget Your Password?</a>
            <button onClick={loginUser}>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back !</h1>
              <p>Enter your personal details to use all of site features</p>
              <Link to={{ pathname: '/signup', search: '?form=login' }} className='signuplink'><button className="hidden" id="login">Sign in</button></Link>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome, Friend!</h1>
              <p>Enter your personal details to use all of site features</p>
              <Link to={{ pathname: '/signup', search: '?form=signup' }} className='signuplink'><button className="hidden" id="register">Sign Up</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup