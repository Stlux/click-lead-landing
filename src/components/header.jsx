import { useState } from "react";
import logo from "../images/logo.png";

export default function Header(){

    const [showTooltip1, changeStateTooltip1] = useState(false);
    const [showTooltip2, changeStateTooltip2] = useState(false);

    function myTooltip(tooltipId){
        if(tooltipId == 1){
            changeStateTooltip1(!showTooltip1);
        }else{
            changeStateTooltip2(!showTooltip2);
        }
    }

    function leaveTooltip(tooltipId){
        if(tooltipId == 1){
            changeStateTooltip1(!showTooltip1);
        }else{
            changeStateTooltip2(!showTooltip2);
        }
    }

    return(
        <>
        <nav className="navbar d-none d-sm-none d-md-block d-lg-block d-xl-block">
            <div className="container">
                <a className="navbar-brand"><img src={logo} /></a>
                <div className="nav-links">
                    <ul className="nav-links-list">
                        <li><a href="#program-box">To advertisers</a></li>
                        <li><a href="#search-box">Join the team</a></li>
                        <li className="lang-changer"><a href="#">En ↓</a></li>
                    </ul>

                    <div className="buttons-group">
                        <a className="header-login-link" href="#" onMouseOver={() => myTooltip(1)} onMouseLeave={() => leaveTooltip(1)}>Login</a>
                        <div className="tooltip tooltip1" style={showTooltip1 ? { opacity: 1 } : {}}>In development</div>
                    </div>
                    
                    <div className="buttons-group">
                        <button className="header-signup" onMouseOver={() => myTooltip(2)} onMouseLeave={() => leaveTooltip(2)}>sign up</button>
                        <div className="tooltip tooltip2" style={showTooltip2 ? { opacity: 1 } : {}}>In development</div>
                    </div>
                </div>
            </div>
        </nav>

        <nav className="navbar d-block d-sm-block d-md-none d-lg-none d-xl-none">
            <div className="container">
                <div className="first-head-row">
                    <a className="navbar-brand"><img src={logo} /></a>
                    <div className="buttons-group">
                        <a className="header-login-link" href="#" onMouseOver={() => myTooltip(1)} onMouseLeave={() => leaveTooltip(1)}>Login</a>
                        <div className="tooltip tooltip1" style={showTooltip1 ? { opacity: 1 } : {}}>In development</div>

                        <button className="header-signup" onMouseOver={() => myTooltip(2)} onMouseLeave={() => leaveTooltip(2)}>sign up</button>
                        <div className="tooltip tooltip2" style={showTooltip2 ? { opacity: 1 } : {}}>In development</div>
                    </div>
                </div>

                <div className="second-head-row">
                    <div className="nav-links">
                        <ul className="nav-links-list">
                            <li><a href="#program-box">To advertisers</a></li>
                            <li><a href="#search-box">Join the team</a></li>
                            <li className="lang-changer"><a href="#">En ↓</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}