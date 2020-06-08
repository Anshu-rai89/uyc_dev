import React from 'react';
import './MainBody.css';
class MainBody extends React.Component{
    render(){
        return(
            <div className="mainbody-div">
                 <img className = "logo-body" src={process.env.PUBLIC_URL + '/img/shield_logo.png'} alt="uyc_logo"></img>
                 <img className = "logo-back" src={process.env.PUBLIC_URL + '/img/main_cover.png'} alt="uyc_logo"></img>
                <span id="moto-text-body">UNIVERSAL YOUTH CONNECT</span>
                <span id="motive">THE WAY FORWARD</span>
                <marquee id="comming-soon">We Will Be Live soon.....</marquee>
            </div>
        )
    }
}

export default MainBody;