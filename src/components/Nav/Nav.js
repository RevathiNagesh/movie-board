import React, { useEffect, useState } from 'react';
import "./Nav.css";
import {Link} from 'react-router-dom';
import icon from "../../images/icon.png";
import avatar from "../../images/avatar.jpg";

const Nav = () => {
    const[show,setShow]=useState(false);
    const NavBarVisibility=()=>{
        if(window.scrollY>100){
          setShow(true)
        }
        else{
            setShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",NavBarVisibility);
        return()=>{
            window.removeEventListener("scroll",NavBarVisibility)
        }
    },[])
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <Link to="/">
        <img src={icon} className='nav-logo' alt='logo' />
      </Link>
      <img src={avatar} className='nav-avatar' alt='avatar' />
    </div>
  )
}

export default Nav
