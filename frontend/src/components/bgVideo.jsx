import React from 'react'
import bgVideo from "../videos/bg.mp4"

const BgVideo = () => {
    return (
        <div id='bg-video'>
            <video src={bgVideo} autoPlay loop muted ></video>
            <div>
                <h1>The Best Restaurant in India</h1>
            </div>
        </div>
    )
}

export default BgVideo
