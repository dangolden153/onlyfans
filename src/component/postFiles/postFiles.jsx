import React from 'react'
import {connect } from 'react-redux'
import {toggleItem} from '../../redux/componentReducer/componentReducer.action'

import './postFiles.css'


const Post =({post,toggleItem})=>{

    const {imgData,name,username,caption, svg,pics} = post

    return (
        <div className="postGallary">
            <div className="postContainer">
            
        <div className="pics_text">

            <div className="DpImg"
            style={{
                backgroundImage:`url(${imgData})`
            }}
            />

            <div className="nameUsername">
                <div className="postName">{name}</div>
                <p className="postUsername">{username}</p>
            </div>

        </div>
        <p className="postCaption">{caption} </p>
            </div>

            <div className="pictureImg">
             <img src={pics} alt="img phics"/>


             <div className="fileSvg"
             style={{
                 backgroundImage:`url(${svg})`
             }}
             />

             </div>

             <div className='subContent'>

             <button onClick={toggleItem}
        className="pictureBtn">
            SUBSCRIBE TO SEE USER'S POSTS
         </button>

         </div>
             
           
       <div className="line"/>

        </div>
    )
}



const MapDispatchToProps = Dispatch=>({
    toggleItem : ()=>(Dispatch(toggleItem()))
})

export default connect (null,MapDispatchToProps)(Post)