import React from 'react'
import bag from '../assets/bag.svg'

import './headerNav.css'


const HeaderNav = ()=>{

    return(
        <div className='headernav'>
            <div className="headernavContainer">

                <div className="svgImg">
                <img src={bag} alt="header icon"/>
                </div>
                
                <div className="svgImg">
                <img src={bag} alt="header icon"/>
                </div>

                <div className="svgImg">
                <img src={bag} alt="header icon"/>
                </div>

                <div className="svgImg">
                <img src={bag} alt="header icon"/>
                </div>
            </div>
        </div>
    )
}

export default HeaderNav