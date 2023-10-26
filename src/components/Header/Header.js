import React from 'react'
import {Link} from "react-router-dom";
import "./Header.css";
import im from '../../images/avatar.jpg';
const Header = () => {
  return (
    <header className="showcase">
        <div className='showcase-top'>
            <img src={im} alt="logo"/>
            <Link to="/" className='btn btn-rounded'>
                Sign In
            </Link>
        </div>
        <div className='showcase-content'>
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel Anytime</p>
            <Link to="/movie-show" className='btn-header btn-x1'>
                WATCH FREE FOR 30 DAYS
                <i className='fas fa-chevron-right btn-icon'></i>
            </Link>
            </div>
    </header>
  )
}

export default Header
