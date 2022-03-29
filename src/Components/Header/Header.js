import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {

  return (
    <div className="header">
      <nav>
        <div className='nav-links'>
            <Link className='link' to='/'><h3>home</h3></Link>
            <Link className='link' to='/category'><h3>category</h3></Link>
            <Link className='link' to='/about'><h3>about</h3></Link>           
        </div>
        <Link className='link' to='/'><h1>Wishlist</h1></Link>
        <div className= 'icons'>
          {props.userName === "" ? (
            <div></div>
          ):(
            <h5>Hello {props.userName}</h5>
          )}
          <Link className='link' to='/user'><FontAwesomeIcon className="header-icon" icon={faUserCircle} size="2x" style={{color:"#FA5272"}}/></Link>
          <Link className='link' to='/cart'><FontAwesomeIcon className="header-icon" icon={faCartShopping} size="2x" style={{color:"#FA5272"}}/></Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;