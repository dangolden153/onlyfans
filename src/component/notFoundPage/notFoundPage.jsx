import React from 'react'

import './notFoundPage.css'

const NotFoundPage =()=>{

    return(
        <div className="notFoundPage">

<div className="errorContianer">
            <h3 className="errorHeader">
            No internet
            </h3>
        <p className="notFOundtext">
        Try:
        </p>
        <ul className="notfoundList">
            <li className="notFoundItem">Checking the network cables, modem, and router</li>
            <li className="notFoundItem">Reconnecting to Wi-Fi</li>
            <li className="notFoundItem">Running Windows Network Diagnostics</li>
        </ul>
        <p className="error">
        ERR_INTERNET_DISCONNECTED
        </p>
        </div>

        </div>
    )
}

export default NotFoundPage