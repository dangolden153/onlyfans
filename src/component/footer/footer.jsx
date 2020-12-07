import React from 'react'
import twitter from '../picture/twitter.svg'
import ig from '../picture/white-ig.svg'
import youtube from '../picture/youtube.svg'

import './footer.css'

const Footer =()=>(

    <div className="footer">
        <div className="columnFlex">
            <div className="firstBox">
                <h3 className="footerText">
                For employer <br/> next hire is here
                </h3>
            </div>
            <div className="secondBox">
                <ul className="list">
                    <li className="items">@ 2020 job privision</li>
                    <li className="items">Privacy</li>
                    <li className="items">About</li>
                    <li className="items">Cookies</li>
                    <li className="items">Terms</li>
                    <li className="items">Contact interswitch@gmail.com</li>

                </ul>
            </div>
            <div className="thirdBox">

                <div className="svgImg">
                <img src={twitter} alt="twitter svg"/>
                </div>

                <div className="svgImg">
                <img src={ig} alt="instagram svg"/>
                </div>

                <div className="svgImg">
                <img src={youtube} alt="youtube svg"/>
                </div>
            </div>

        </div>
    </div>
)

export default Footer;