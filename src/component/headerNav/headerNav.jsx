import React from 'react'
import home from '../assets/home.svg'
import bell from '../assets/bell1.svg'
import file from '../assets/files.svg'
import message from '../assets/comment.svg'
import account from '../assets/account.svg'
import {motion} from 'framer-motion'

import './headerNav.css'


const HeaderNav = ()=>{

    return(
        <div className='headernav'>
            <motion.div className="headernavContainer"
            
            >
                <a href="/">
                <div className="svgImg">
                <img src={home} alt="header icon"/>
                </div>
                </a>

                <a href="/error">
                <div className="svgImg">
                <img src={bell} alt="header icon"/>
                </div>
                </a>

                <a href="/error">
                <div className="svgImg">
                <img src={file} alt="header icon"/>
                </div>
                </a>

                <a href="/error">
                <div className="svgImg">
                <img src={message} alt="header icon"/>
                </div>
                </a>

                <a href="/error">
                <div className="svgImg">
                <img src={account} alt="header icon"/>
                </div>
                </a>

            </motion.div>
        </div>
    )
}

export default HeaderNav