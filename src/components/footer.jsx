import sc1 from "../images/sc1.png";
import sc2 from "../images/sc2.png";
import sc3 from "../images/sc3.png";

export default function Footer(){
    return(
        <>
            <div className="bottom-box">
                <div className="container">
                    <div className="bottom-bx">
                        <div className="text">
                            <h3>Subscribe to us <br /> in social networks</h3>
                        </div>
                        <ul className="social">
                            <li>
                                <a target="_blank" href="https://www.instagram.com/clicklead_official/">
                                    <img src={sc1} width="74" alt="inst" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://t.me/clicklead_channel">
                                    <img src={sc2} width="74" alt="telegram" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://vk.com/clicklead">
                                    <img src={sc3} width="74" alt="vk" />
                                </a>
                            </li>
                        </ul>
                        <div className="copy">CLICKLEAD 2022</div>
                    </div>
                </div>
            </div>
        </>
    );
}