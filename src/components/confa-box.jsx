import { useState } from "react";

import c1 from "../images/carousel-1.jpg";
import c2 from "../images/carousel-2.jpg";
import c3 from "../images/carousel-3.jpg";
import c4 from "../images/carousel-4.jpg";

export default function Confabox(){

    let dataTable = [
        {id: 0, img: c1, text: "Our team is always involved in the biggest affiliate marketing conversions", alt: "image 1"},
        {id: 1, img: c2, text: "Our team is always involved in the biggest affiliate marketing conversions", alt: "image 2"},
        {id: 2, img: c3, text: "Our team is always involved in the biggest affiliate marketing conversions", alt: "image 3"},
        {id: 3, img: c4, text: "Our team is always involved in the biggest affiliate marketing conversions", alt: "image 4"},
    ];

    let [slider, sliderUpdate] = useState(dataTable[0]);

    function moveLeft(){
        if((slider.id - 1) >= 0){
            sliderUpdate(dataTable[slider.id - 1]);
            console.log(slider.id - 1);
        }else{
            sliderUpdate(dataTable[3]);
        }
    }

    function moveRight(){
        if((slider.id + 1) <= 3){
            sliderUpdate(dataTable[slider.id + 1]);
            console.log(slider.id + 1)
        }else{
            sliderUpdate(dataTable[0]);
        }
    }

    function toChoosenSlide(ind){
        sliderUpdate(dataTable[ind]);
        console.log();
    }

    let sliderDots = dataTable.map((val, ind) => {
        if(ind !== slider.id){
            return(
                <li className="not-filled" onClick={() => toChoosenSlide(ind)}></li>
            );
        }else{
            return(
                <li className="filled"></li>
            );
        }
    });

    return(
        <>
        <div className="confa-box">
            <div className="container">
                <div className="confa-bx">
                    <div className="text-bx">
                        <div className="t1">We take part in conferences</div>
                        <div className="t2">Our team always participates in the biggest affiliate <br /> marketing conferences</div>
                    </div>

                    <div className="confa-slider">
                        
                        <div className="slider-arrows left-arrow" onClick={moveLeft}>
                            <i className="bi bi-caret-left-fill"></i>
                        </div>
                        
                        <div className="slider-content">
                            <div className="slider-img">
                                <img src={slider.img} alt={slider.alt} />
                            </div>
                        </div>
                        
                        <div className="slider-arrows right-arrow" onClick={moveRight}>
                            <i className="bi bi-caret-right-fill"></i>
                        </div>

                    </div>


                    <div className="slider-info">
                        {slider.text}
                    </div>

                    <center>
                        <ul className="slider-dots">
                            {sliderDots}
                        </ul>
                    </center>
                </div>
            </div>
        </div>
        </>
    );
}