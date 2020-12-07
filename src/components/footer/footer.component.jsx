import React from 'react'
import './footer.styles.css'
import facebook from '../pictures/facebook.svg'
import twitter from '../pictures/twitter-white.svg'
import youtube from '../pictures/youtube-white.svg'



const Footer =()=>{

    return(

        <div className="footer">

            <div className="footer-container">
                <div className="list-container">

                <ul className="list">
                    <li className="items"><a to='/not-found'>Web Accessbility</a>  </li>
                    <li className="items"><a to='/not-found'>Contact</a> </li>
                    <li className="items"><a to='/not-found'>About us</a> </li>
                    <li className="items"><a to='/not-found'>Terms of Us</a> </li>
                    <li className="items"><a to='/not-found'> Privacy</a></li>
                    </ul>

                    <ul className="list">
                    <li className="items"><a to='/not-found'> Site Map</a></li>
                    <li className="items"><a to='/not-found'>Call Motel:</a>  </li>
                </ul>
                </div>

                <div className="svg">
                    <div className="svg-img">
                        <img src={facebook} alt="facebook svg"/>
                    </div>
                    <div className="svg-img">
                        <img src={twitter} alt="twitter svg"/>
                    </div>
                    <div className="svg-img">
                        <img src={youtube} alt=" youtube svg"/>
                    </div>
                </div>

                <div className="reserve-text">
                    <span className="text">
                       @ 2020 LLC. All rights reserved
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;