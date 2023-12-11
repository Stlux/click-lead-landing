import logo from "../images/logo.png";

export default function Header(){
    return(
        <>
        <nav class="navbar d-none d-sm-none d-md-block d-lg-block d-xl-block">
            <div class="container">
                <a class="navbar-brand"><img src={logo} /></a>
                <div className="nav-links">
                    <ul className="nav-links-list">
                        <li><a href="#">To advertisers</a></li>
                        <li><a href="#">Join the team</a></li>
                        <li className="lang-changer"><a href="#">En ↓</a></li>
                    </ul>
                    <a className="header-login-link" href="">Login</a>
                    <button className="header-signup">sign up</button>
                </div>
            </div>
        </nav>

        <nav class="navbar d-block d-sm-block d-md-none d-lg-none d-xl-none">
            <div class="container">
                <div className="first-head-row">
                    <a class="navbar-brand"><img src={logo} /></a>
                    <div>
                        <a className="header-login-link" href="">Login</a>
                        <button className="header-signup">sign up</button>
                    </div>
                </div>

                <div className="second-head-row">
                    <div className="nav-links">
                        <ul className="nav-links-list">
                            <li><a href="#">To advertisers</a></li>
                            <li><a href="#">Join the team</a></li>
                            <li className="lang-changer"><a href="#">En ↓</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}