import React from "react";
import bgVideo from "../../Media/BackgroundVideo.mp4";
import "./BackgroundVideo.css";

// This is the navigation bar, using Bootstrap
const BackgroundVideo = () => {
    return (
        <div>
            <video id="BGVideo" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" height="100%" src={bgVideo}/>
        </div>
    )
}

export default BackgroundVideo;