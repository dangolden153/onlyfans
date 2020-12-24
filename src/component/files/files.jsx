import React from 'react'

import fileGallaryData from './postGallaryData'
import Post from '../postFiles/postFiles'

import './files.css'



const Files =()=>{

    return(
    <div>
        <h3 className="picsText">
            134 POSTS
        </h3>

        {fileGallaryData.map(post=>(
            <Post post={post} key={post.id} />
        ))}
    </div>)
}


export default Files