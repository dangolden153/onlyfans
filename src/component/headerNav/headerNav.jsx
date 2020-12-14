import React from 'react'
import home from '../assets/home.svg'
import bell from '../assets/bell1.svg'
import file from '../assets/files.svg'
import message from '../assets/comment.svg'
import account from '../assets/account.svg'

import './headerNav.css'


const HeaderNav = ()=>{

    return(
        <div className='headernav'>
            <div className="headernavContainer">

                <div className="svgImg">
                <img src={home} alt="header icon"/>
                </div>
                
                <div className="svgImg">
                <img src={bell} alt="header icon"/>
                </div>

                <div className="svgImg">
                <img src={file} alt="header icon"/>
                </div>

                <div className="svgImg">
                <img src={message} alt="header icon"/>
                </div>

                <div className="svgImg">
                <img src={account} alt="header icon"/>
                </div>
            </div>
        </div>
    )
}

export default HeaderNav