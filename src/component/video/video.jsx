import React from 'react'
import svg from '../assets/bag.svg'
import pics from '../assets/onlyfans-bg.png'

import './video.css'

const Video =()=>{

    return(
        <div>
<div className='picture'>
        <h3 className="picsText">
            400 VIDEOS
        </h3>  

        <div className="pictureImg">
            <img src={pics} alt="img phics"/>
           
            <div className="lockSvg">
            <img src={svg} alt="img phics"/>
            </div>

            <button className="pictureBtn">
            SUBSCRIBE TO SEE USER'S POSTS
            </button>
        </div>

        </div>
        </div>
    )
}

export default Video