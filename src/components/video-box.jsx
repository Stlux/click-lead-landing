import playbtn from "../images/Play.svg";

export default function VideoBox(){
    return(
        <>
            <div class="video-box">
                <div class="container">
                    <div class="video-bx">
                        <div className="overlay"></div>
                        
                        <div class="tt">
                            <div class="t1">Clicklead Grand Champions</div>
                            <div class="t2">The biggest race in the affiliate industry</div>
                        </div>
                    
                        <div class="img-play">
                            <a href="https://www.youtube.com/watch?v=bekeapKBSYU" data-fancybox="" class="over">
                                <img src={playbtn} alt="play button" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}