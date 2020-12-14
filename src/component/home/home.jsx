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
const [state, setState] = useState(false)

const buttonText ='More info'
const setbuttonText ='collaspe'

const toggleBtn = ()=>{
        setchangeText(!changeText)
}



return (

        
        <div className="home">
            <div className="homeCont">
                    <div className="profilePicsCont">
                <div className="profilePics" 
                style={{
                        backgroundImage:`url(${pics})`
                }}
                >
        

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
                </div>

                



                <div className="textContainer">

                <p className="usernameBox margin">
                <span className="username">Janet Nicholas</span>      
                <span className="likes">@JanetNicholas</span> 
                </p>

                <div className="textContent margin">
                        <p className={changeText ? "info" : " textcontent"}>
                                nudes ,Lewd, Vids (solo content), and more
                                preview on my twitter @dangolden

                                <p className="infotext">free goodles for subs</p>
                                <p className="infotext">access to extra (feet pics phone sex, dick rating)</p>
                                <p className="infotext">chat 1:1 @  snapchat acct dangolden124</p>
                                <p className="infotext">Custom requezt welcome</p>
                                <p className="infotext">Redistrbuting my content without expression written permmision
                                will result in illegal action and being blocked. This is direct violation of 
                                OnlyFSans Terms of Service</p>

                        </p>

                        <button onClick={toggleBtn}
                        className="btn">{ changeText ? setbuttonText 
                          :buttonText  }</button>
                </div>


                <div className="subcontianer">
                        <p className="subText">Free Subcription</p>
                        <button className="subBtn">Follow For Free</button>
                </div>

                </div>
                
                <SubComponent />
               
               
                
        
            </div>
        </div>

  
)}

export default Home