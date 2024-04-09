import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/navbar.css';
import { useSelector } from 'react-redux';
import { account } from '../appwrite/appwriteConfig';
import {useDispatch} from 'react-redux'
import {logout} from '../store/authSlice'
import { useNavigate } from 'react-router-dom';

 
function Nav() {
    const logoutnavigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status)
    const dispatch = useDispatch()
    const handleLogout = async () => {
        try {
            await account.deleteSession("current")
            dispatch(logout())
            logoutnavigate('/')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="navbar">
                <nav>
                    <div className="left-nav">
                        <div className="logo">
                            <h3>ShoeSavvy</h3>
                            <img src="/src/images/logo/logo.png" alt="" />
                        </div>
                    </div>
                    <ul>
                        <li><NavLink className="navlink" style={({ isActive }) => ({
                            color: isActive
                                ? "orange"
                                : "black",
                        })} to="/">Home</NavLink></li>
                        <li><NavLink className="navlink" style={({ isActive }) => ({
                            color: isActive
                                ? "orange"
                                : "black",
                        })} to="/men">Men</NavLink></li>
                        <li><NavLink className="navlink" style={({ isActive }) => ({
                            color: isActive
                                ? "orange"
                                : "black",
                        })} to="/women">Women</NavLink></li>
                        <li><NavLink className="navlink" style={({ isActive }) => ({
                            color: isActive
                                ? "orange"
                                : "black",
                        })} to="/sports">Sports</NavLink></li>
                        <li><NavLink className="navlink" style={({ isActive }) => ({
                            color: isActive
                                ? "orange"
                                : "black",
                        })} to="/contact">Contact</NavLink></li>
                    </ul>
                    {authStatus ? <div className="right-nav">
                    <Link to={'/addtocart'}><img src="/src/images/logo/shopping.svg" id='cartlogo' alt=""/></Link>    
                    <button onClick={handleLogout} className='logoutbtn'>Logout</button>
                    </div> : <div className="right-nav">
                        <ul>
                            {/* Pass a query parameter indicating signup */}
                            <li><Link to={{ pathname: '/signup', search: '?form=signup' }} className='signuplink'>Signup</Link></li>
                            {/* Pass a query parameter indicating login */}
                            <li><Link to={{ pathname: '/signup', search: '?form=login' }} className='signuplink'>Login</Link></li>
                        </ul>
                        </div>}
                        {/* <img src="/src/images/logo/search.svg" alt=""/>
                <img src="/src/images/logo/shopping.svg" alt=""/> */}
                </nav>
            </div>
            
        </>
    )
}

export default Nav