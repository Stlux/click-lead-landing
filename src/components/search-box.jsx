import { useState } from "react";

import z1 from "../images/z1.png";
import z2 from "../images/z2.png";
import z3 from "../images/z3.png";
import z4 from "../images/z4.png";
import z5 from "../images/z5.png";
import z6 from "../images/z6.png";

export default function SearchBox(){

    let dataToTransform = [
        {id: 1, top: 0, left: 100, src: z3},
        {id: 3, top: 600, left: 800, src: z4}
    ]

    let [coords, updateCords] = useState(dataToTransform);

    let handleMouseOver = () => {
        console.log(1);
        const updatedBoxes = [...coords];
        for(let i=0; i<coords.length; i++){
            updatedBoxes[i] = {
                ...updatedBoxes[i],
                top: updatedBoxes[i].top + getRandomOffset(),
                left: updatedBoxes[i].left + getRandomOffset(),
            };

            console.log(updatedBoxes[i].top + ' ' + updatedBoxes[i].left);
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
            <div className="search-box" onMouseOver={() => handleMouseOver()}>
                <div className="container">

                    {imgsToTransform}

                    <div class="text-bx">
                        <h3>Work with us!</h3>
                        <p>
                            We are looking for strong talent.
                            We have offices in<br />three cities and are happy to consider candidates<br />in the following areas.
                        </p>
                    </div>

                    <ul className="list">
                        <li>
                            <div class="frame">
                                <div class="vh">
                                    <div class="t1">BUSINESS DEVELOPMENT MANAGER</div>
                                    <a target="_blank" href="https://t.me/Clicklead_HR_2" class="btn">Respond</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="frame">
                                <div class="vh">
                                    <div class="t1">DATA ANALYST</div>
                                    <a target="_blank" href="https://t.me/Clicklead_HR_2" class="btn">Respond</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="frame">
                                <div class="vh">
                                    <div class="t1">Head of Marketing</div>
                                    <a target="_blank" href="https://t.me/Clicklead_HR_2" class="btn">Respond</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="frame">
                                <div class="vh">
                                    <div class="t1">Affiliate</div>
                                    <a target="_blank" href="https://t.me/Clicklead_HR_2" class="btn">Respond</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="frame">
                                <div class="vh">
                                    <div class="t1">MEDIABUYER Google</div>
                                    <a target="_blank" href="https://t.me/Clicklead_HR_2" class="btn">Respond</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}