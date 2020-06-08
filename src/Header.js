import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import UnderConstruction from './UnderConstruction'
import './Header.css';

class Header extends React.Component{
    render(){
        return(<BrowserRouter>
            <div className= "navbar">
            <img className = "logo" src={process.env.PUBLIC_URL + '/img/shield_logo.png'} alt="uyc_logo"></img>
            <span id="moto-text">UNIVERSAL YOUTH CONNECT</span>
                <ul className="nav-links">
                    <li class="nav-items" id="home" >
                       <Link to={UnderConstruction}> HOME </Link>
                    </li>
                    <li class="nav-items" id="about" >
                       <Link to="/UnderConstruction"> ABOUT US </Link>
                    </li>
                    <li class="nav-items" id="events" >
                        <Link to="/UnderConstruction">  EVENTS </Link>
                    </li>
                    <li class="nav-items" id="blogs" >
                        <Link to="/UnderConstruction"> BLOGS </Link>
                    </li>
                    <li class="nav-items" id="donate" >
                        <Link to="/UnderConstruction"> DONATE </Link>
                    </li>
                </ul>
            </div>
            </BrowserRouter>
        )
    }
}

export default Header;