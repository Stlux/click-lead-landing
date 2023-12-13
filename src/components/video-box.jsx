import playbtn from "../images/Play.svg";

export default function VideoBox(){
    return(
        <>
            <div className="video-box">
                <div className="container">
                    <div className="video-bx">
                        <div className="overlay"></div>
                        
                        <div className="tt">
                            <div className="t1">Clicklead Grand Champions</div>
                            <div className="t2">The biggest race in the affiliate industry</div>
                        </div>
                    
                        <div className="img-play">
                            <a href="https://www.youtube.com/watch?v=bekeapKBSYU" data-fancybox="" className="over">
                                <img src={playbtn} alt="play button" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}