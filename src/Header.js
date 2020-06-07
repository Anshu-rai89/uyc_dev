import React from 'react';
import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <div className= "navbar">
            <img className = "logo" src={process.env.PUBLIC_URL + '/img/shield_logo.png'} alt="uyc_logo"></img>
            <span id="moto-text">UNIVERSAL YOUTH CONNECT</span>
                <ul className="nav-links">
                    <li class="nav-items" id="home">
                        HOME
                    </li>
                    <li class="nav-items" id="about">
                        ABOUT US
                    </li>
                    <li class="nav-items" id="events">
                        EVENTS
                    </li>
                    <li class="nav-items" id="blogs">
                        BLOGS
                    </li>
                    <li class="nav-items" id="donate">
                        DONATE
                    </li>
                </ul>
            </div>

        )
    }
}

export default Header;