import React from 'react'
import pics from '../assets/ring.jpg'

import './home.css'

const Home =()=>(

        
        <div className="home">
            <div className="homeCont">
                <div className="profilePics" >
        <img src={pics} alt="profile img" className='profileImg'/>
                </div>

                <div className="profileText">
                <h1>subcribe to watch free video</h1>
                <a href="/card">subscribe</a>
                </div>

                <div className="subprofilePics" >
        <img src={pics} alt="profile img" className='profileImg'/>
                </div>
        
            </div>
        </div>

  
)

export default Home