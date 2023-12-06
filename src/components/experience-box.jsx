import exp1 from "../images/exp1.png";

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

                    </div>
                </div>
            </div>
        </>
    );
}