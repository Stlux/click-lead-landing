import { useState } from "react";
import mclarenimg from "../images/McLaren_black.png";
import mclarenlightimg from "../images/McLaren_light.png";

import z1 from "../images/z1.png";
import z2 from "../images/z2.png";
import z3 from "../images/z3.png";
import z4 from "../images/z4.png";
import z5 from "../images/z5.png";
import z6 from "../images/z6.png";

export default function TopBox(){

    let dataToTransform = [
        {id: 1, top: -50, left: 450, src: z1},
        {id: 2, top: 0, left: 700, src: z2},
        {id: 3, top: 10, left: 920, src: z3},
        {id: 4, top: 120, left: 582, src: z4},
        {id: 5, top: 240, left: 800, src: z5},
        {id: 6, top: 450, left: 340, src: z6}
    ]

    let [coords, updateCords] = useState(dataToTransform);

    let handleMouseOver = () => {
        const updatedBoxes = [...coords];
        for(let i=0; i<coords.length; i++){
            updatedBoxes[i] = {
                ...updatedBoxes[i],
                top: updatedBoxes[i].top + getRandomOffset(),
                left: updatedBoxes[i].left + getRandomOffset(),
            };

        }

        updateCords(updatedBoxes);
    }
    
    const getRandomOffset = () => {    
        return Math.random() > 0.5 ? 10 : -10;
    };

    let imgsToTransform = coords.map(val => {
        return(
            <img src={val.src} alt="" className={"uz uz" + val.id} key={val.id} style={{ top: `${val.top}px`, left: `${val.left}px` }}/>
        );
    });

    return(
        <>
            <div className="top-box" onMouseOver={() => handleMouseOver()}>
                <div className="container top-box d-none d-sm-none d-md-none d-lg-block d-xl-block">

                    {imgsToTransform}

                    <div className="position-absolute krug1"></div>
                    <div className="position-absolute krug2"></div>

                    <div className="position-absolute krest1"></div>
                    <div className="position-absolute krest2"></div>

                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <h1 className="top-box-title"><span>Clicklead</span> <br />the best conditions <br /> on iGaming offers</h1>
                            
                            <p className="top-box-desc">Sign up and take part in a race with a  <br /><b>$1m+ prize pool.</b></p>
                            <a className="btn" target="_blank" href="https://champions.clicklead.network/" class="btn">Start!</a>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6" style={{overflow: "visible"}}>
                            <div className="mclaren-box">
                                <img className="mc-laren" src={mclarenimg} alt="mc-laren" />
                                <img className="mc-laren-lights" src={mclarenlightimg} alt="mc-laren-lights" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container top-box d-block d-sm-block d-md-block d-lg-none d-xl-none">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <h1 className="top-box-title"><span>Clicklead</span> <br />the best conditions <br /> on iGaming offers</h1>
                            
                            <div className="mclaren-box">
                                <img className="mc-laren" src={mclarenimg} alt="mc-laren" />
                                <img className="mc-laren-lights" src={mclarenlightimg} alt="mc-laren-lights" />
                            </div>

                            <p className="top-box-desc">Sign up and take part in a race with a  <br /><b>$1m+ prize pool.</b></p>
                            <a className="btn" target="_blank" href="https://champions.clicklead.network/" class="btn">Start!</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
