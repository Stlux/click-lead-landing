import mclarenimg from "../images/McLaren_black.png";
import mclarenlightimg from "../images/McLaren_light.png";

export default function TopBox(){
    return(
        <>
            <div className="container top-box">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <h1 className="top-box-title"><span>Clicklead</span> <br />the best conditions <br /> on iGaming offers</h1>
                        
                        <p className="top-box-desc">Sign up and take part in a race with a  <br /><b>$1m+ prize pool.</b></p>
                        <a className="btn" target="_blank" href="https://champions.clicklead.network/" class="btn">Start!</a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6" style={{overflow: "visible"}}>
                        <div className="mclaren-box">
                            <img className="mc-laren" src={mclarenimg} alt="mc-laren" />
                            <img className="mc-laren-lights" src={mclarenlightimg} alt="mc-laren-lights" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}