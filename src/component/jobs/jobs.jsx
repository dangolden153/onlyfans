import React from 'react'
import pics from '../picture/love.svg'
import Footer from '../footer/footer'
import './jobs.css'

const Jobs =({job})=>{
    const {type,title,location,text} = job
    

    return(
        <div className='job'>
            <div className='jobContainer'>
                <h3 className="new">{type}</h3>
                <div className="titleImg">
                <h1 className="jobTitle">{title}</h1>
                <div className="svg">
                    <img src={pics} alt=""/>
                </div>
                </div>
                <p className="location">{location}</p>
                <p className="text">{text}</p>
                <a href="/form" className="link">
                <button className="jobBtn">Apply</button>
                </a>
            </div>

        </div>
    )
}

export default Jobs