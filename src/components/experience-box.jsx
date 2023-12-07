import exp1 from "../images/exp1.png";
import exp2 from "../images/exp2.png";
import exp3 from "../images/exp3.png";
import exp4 from "../images/exp4.png";
import exp5 from "../images/exp5.png";
import exp6 from "../images/exp6.png";

export default function ExperienceBox(){
    return(
        <>
            <div className="experience">
                <div className="container">
                    
                    <div className="experience-box">

                        <div class="text">
                            <h3>We have extensive experience <br /> in app development</h3>
                            <p>We provide more than 20 Android <br /> and IOS apps free of charge</p>
                        </div>

                        <div class="image">
                            <img src={exp1} alt="experience 1" />
                        </div>

                        <div className="row exp-rows">
                            <div className="col-12 col-md-6 col-lg-6 exp-rows-img"><img src={exp2} alt="experience 2"/></div>
                            <div className="col-12 col-md-6 col-lg-6 exp-rows-text"><span>Segmented push notifications</span></div>
                        </div>

                        <div className="row exp-rows">
                            <div className="col-12 col-md-6 col-lg-7 exp-rows-text"><span>Daily monitoring of reviews and ratings</span></div>
                            <div className="col-12 col-md-6 col-lg-5 exp-rows-img"><img src={exp3} alt="experience 3"/></div>
                        </div>

                        <div className="row exp-rows">
                            <div className="col-12 col-md-6 col-lg-6 exp-rows-img"><img src={exp4} alt="experience 4"/></div>
                            <div className="col-12 col-md-6 col-lg-6 exp-rows-text"><span>Apps optimized for any source : FB / Google / in-app / TT</span></div>
                        </div>

                        <div className="row exp-rows">
                            <div className="col-12 col-md-6 col-lg-7 exp-rows-text"><span>Private apps for tops</span></div>
                            <div className="col-12 col-md-6 col-lg-5 exp-rows-img"><img src={exp5} alt="experience 5"/></div>
                        </div>

                        <div className="row exp-rows">
                            <div className="col-12 col-md-6 col-lg-6 exp-rows-img"><img src={exp6} alt="experience 6"/></div>
                            <div className="col-12 col-md-6 col-lg-6 exp-rows-text"><span>Bright enveloping ASOs</span></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}