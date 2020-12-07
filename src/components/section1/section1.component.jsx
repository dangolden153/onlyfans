import React from 'react'
import './section1.styles.css'
import location from '../pictures/placeholder.svg'
import call from '../pictures/call.svg'
import access from '../pictures/add-friend.svg'


const Section1 =()=>{

    return(
        <div className="section-container">
            <div className="section-box">
            <div className="detail-container">
                <div className="address-con">
                    <div className="icon">
                        <img src={location} alt=""/>
                    </div>
                    <span className="address-text">
                    9201 E. Arapahoe Road
Greenwood Village, CO 80112
                        </span>
                    </div>

                <div className="address-con call2">
                <div className="icon">
                        <img src={call} alt=""/>
                    </div>
                    <span className="call ">Call</span>
                </div>


                <div className="address-con">
                <div className="icon">
                        <img src={access} alt=""/>
                    </div>
                    <span className="motel">Motel Accessibily</span>
                </div>


            </div>
            </div>
            {/* <div className="addition-container">
            <div className="addition">
                <span className="addition-text">Additional Details</span>
                
            </div>
            </div> */}
        </div>
    )
}

export default Section1