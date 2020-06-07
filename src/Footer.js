import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer-div">
                <img src={process.env.PUBLIC_URL + '/img/fb.png'} alt="fb-img" id="fb-logo" className="social-icon"></img>
                <img src={process.env.PUBLIC_URL + '/img/insta.jpg'} alt="insta-img" id="insta-logo" className="social-icon"></img>
                <span id="mail-id">@universalyuthconnect</span>
                <img src={process.env.PUBLIC_URL + '/img/whatsapp1.jpg'} alt="whatsapp-img" id="whatsapp-logo" className="social-icon"></img>
                <span id="whatsapp-num">+91 97483 81506</span>
            </div>
        )
    }
}
export default Footer;