import { useState } from "react";
import z2 from "../images/z2.png";
import z3 from "../images/z3.png";
import z5 from "../images/z5.png";


export default function HistoryBox(){

    let dataToTransform = [
        {id: 1, top: 50, left: -40, src: z5},
        {id: 2, top: 700, left: -100, src: z3},
        {id: 3, top: 400, left: 700, src: z2}
    ]

    let [coords, updateCords] = useState(dataToTransform);
    let [activeYearId, setAciveYearId] = useState(7);

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

    function moveToLeft(){
        if(activeYearId > 1){
            setAciveYearId(activeYearId - 1);
        }else{
            setAciveYearId(7);
        }
    }

    function moveToRight(){
        if(activeYearId < 7){
            setAciveYearId(activeYearId + 1);
        }else{
            setAciveYearId(1);
        }
    }

    let yearData = [
        {id: 1,y: 2017,p: "Social lead - traffic from social networkss"},
        {id: 2,y: 2018,p: "Google Play CPA apps development"},
        {id: 3,y: 2019,p: "The company’s staff is increased to 90 people"},
        {id: 4,y: 2020,p: "Release of a cpa network on self-serve platform"},
        {id: 5,y: 2021,p: "CLICKLEAD increased more then 15,000 active publishers"},
        {id: 6,y: 2022,p: "More then 1000 offers in 40 countries in active <br /> work on CLICKLEAD - platform"},
        {id: 7,y: 2023,p: "40,000+ webmasters work with us"},
    ];

    let selectedContent = [yearData[6].y, yearData[6].p];

    let bars = yearData.map((val) => {
        if(activeYearId === val.id){
            selectedContent = [val.y, val.p];
            return(
                <li className="active-bar" key={val.y}>{val.y}<div className={"bx bx-" + val.id}></div></li>
            );    
        }

        return(
            <li className="" key={val.y}>{val.y}<div className={"bx bx-" + val.id}></div></li>
        );
    });

    return(
        <>
            <div className="history-box" onMouseOver={() => handleMouseOver()}>

                {imgsToTransform}

                <div className="container">
                    <div className="wrap">
                        <div className="text">
                            <h3>Affiliate Program</h3>
                            <p>We have been in the CPA market since 2016 (ex. Social Lead). Over the years in traffic arbitrage, we have learned how to make our own applications for Google Play, mastered social media traffic, and created our own next-generation CPA platform.</p>
                        </div>
                    </div>

                    <div className="tab-bx">
				        <ul className="tabs act">
                            {bars}
                        </ul>
                    </div>

                    <div className="box">
                        <div className="control-left" onClick={moveToLeft}></div>
                        <div className="box-data">
                            <div className="t1">{selectedContent[0]}</div>
                            <div className="t2" dangerouslySetInnerHTML={{__html:selectedContent[1]}}></div>
                        </div>
                        <div className="control-right" onClick={moveToRight}></div>
                    </div>
                </div>
            </div>
        </>
    );
}