import React from 'react'
import postGallaryData from './postGallaryData'

import './postGallary.css'

const PostGallary =()=>{

    return(
    <div>
        <h3 className="picsText">
            13 POSTS
        </h3>

        {postGallaryData.map(post=>(
            <Post post={post} key={post.id} />
        ))}
    </div>)
}

const Post =({post})=>{

    const {imgData,name,username,caption,postImg} = post

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

            <div className="postImg"
            style={{
                backgroundImage:`url(${postImg})`
            }} 
           />
       

<div className="line"/>

        </div>
    )
}

export default PostGallary