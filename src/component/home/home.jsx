import React,{useState} from 'react'
import pics from '../assets/onlyfans.jpg'
import dp from '../assets/onlyfans2.jpg'
import Post from '../post/post'
import Video from '../video/video'
import Files from '../files/files'
import Picture from '../pictures/pictures'
import Achieve from '../achieve/achieve'
import svg from '../assets/right-arrow.svg'
import SubBenefit from '../subBenefit/subBenefit'
import SubComponent from '../subComponent/subComponent'
import './home.css'

const Home =()=>{
const [changeText , setchangeText] = useState(false)

const buttonText ='More info'
const setbuttonText ='collaspe'

const toggleBtn = ()=>{
        setchangeText(!changeText)
}


return (

        
        <div className="home">
            <div className="homeCont">
                <div className="profilePics" >
        <img src={pics} alt="profile img" className='profileImg'/>

        <div className="profileText">
                <div className="svgText">   

                <div style={{
                        backgroundImage: `url(${svg})`
                }}
                className="svgArrow"></div>
                        

                <div className='usernameBox'>
                  <span className="username">Janet Nicholas</span>      
                  <span className="likes">133 posts - 1.5k likes</span>      
                </div>

                </div>
                <a href="/card">subscribe</a>
                </div>

                </div>

               

                <div className="subprofilePics" >
        <img src={dp} alt="profile img" className='profileImg'/>
                </div>



                <div className="textContainer">

                <p className="usernameBox margin">
                <span className="username">Janet Nicholas</span>      
                <span className="likes">@JanetNicholas</span> 
                </p>

                <div className="textContent margin">
                        <p className="textcontent">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Ab culpa ipsa, vero nihil explicabo sequi. Lorem ipsum dolor sit,
                                  amet consectetur adipisicing elit. Beatae, adipisci!
                        </p>

                        <button onClick={toggleBtn}
                        className="btn">{ changeText ? setbuttonText  : buttonText }</button>
                </div>


                <div className="subcontianer">
                        <p className="subText">Free Subcription</p>
                        <button className="subBtn">Follow For Free</button>
                </div>

                </div>
                
                <SubComponent />
               
                <SubBenefit/>
                
        
            </div>
        </div>

  
)}

export default Home