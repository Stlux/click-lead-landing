import { useState } from "react";
import playbtn from "../images/Play.svg";

export default function HistoryBox(){
    let [activeYearId, setAciveYearId] = useState(7);

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
                <li className="active-bar" key={val.y}>{val.y}<div class={"bx bx-" + val.id}></div></li>
            );    
        }

        return(
            <li className="" key={val.y}>{val.y}<div class={"bx bx-" + val.id}></div></li>
        );
    });

    return(
        <>
            <div class="history-box">
                <div class="container">
                    <div class="wrap">
                        <div class="text">
                            <h3>Affiliate Program</h3>
                            <p>We have been in the CPA market since 2016 (ex. Social Lead). Over the years in traffic arbitrage, we have learned how to make our own applications for Google Play, mastered social media traffic, and created our own next-generation CPA platform.</p>
                        </div>
                    </div>

                    <div class="tab-bx">
				        <ul class="tabs act">
                            {bars}
                        </ul>
                    </div>

                    <div className="box">
                        <div className="control-left" onClick={moveToLeft}></div>
                        <div className="box-data">
                            <div class="t1">{selectedContent[0]}</div>
                            <div class="t2" dangerouslySetInnerHTML={{__html:selectedContent[1]}}></div>
                        </div>
                        <div className="control-right" onClick={moveToRight}></div>
                    </div>
                </div>
            </div>
        </>
    );
}