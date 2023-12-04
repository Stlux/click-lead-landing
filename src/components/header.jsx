import logo from "../images/logo.png";

export default function Header(){
    return(
        <nav class="navbar">
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
    );
}