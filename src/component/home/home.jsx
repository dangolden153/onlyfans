import React,{useState} from 'react'
import pics from '../assets/onlyfans7.jpg'
import dp from '../assets/onlyfans10.jpg'
import svg from '../assets/left-arrow.svg'
import menuSvg from '../assets/menu.svg'
import SubComponent from '../subComponent/subComponent'
import {connect } from 'react-redux'
import {toggleItem} from '../../redux/componentReducer/componentReducer.action'
import './home.css'

const Home =({toggleItem})=>{
const [changeText , setchangeText] = useState(false)
const [state, setState] = useState(false)

const buttonText ='More info'
const setbuttonText ='Collaspe info'

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
                  <span className="username">Fredick Betty</span>      
                  <span className="likes">133 posts - 4.3k likes</span>      
                </div>

                </div>
                <div className="navbarIcon"
                style={{
                        backgroundImage: `url(${menuSvg})`
                }}
                />
                
               

                </div>


               


                </div>
                <div className="subprofilePics" >
        <img src={dp} alt="profile img" className='profileImg'/>
                </div>
                </div>

                



                <div className="textContainer">

                <p className="usernameBox margin">
                <span className="username">Fredick Betty</span>      
                <span className="likes">@SweetFredickBetty</span> 
                </p>

                <div className="textContent margin">
                        <p className={changeText ? "info" : " textcontent"}>
                        Always FREE to Follow - Onlyfans Best Creators  💋 - Check Out
                        Hot Only Fans Girls  🔥  - With Daily Updates 😘 - Uncensored
                        and nudes ,Lewd, Vids (solo content), and more
                                previews

                                <p className="infotext">free goodles for subs  🖤</p>
                                <p className="infotext">access to extra (feet pics phone sex, dick rating) </p>
                                <p className="infotext">chat 1:1 @  snapchat acct dangolden124</p>
                                <p className="infotext">Custom request welcome</p>
                                <p className="infotext">Follow us now and find 100's of the hottest 
                                creators on Only Fans plus we have new posts every single day 💦💦.</p>

                                <p className="infotext">Redistrbuting my content without expression written permmision
                                will result in illegal action and being blocked. This is direct violation of 
                                OnlyFans Terms of Service</p>

                        </p>

                        <button onClick={toggleBtn}
                        className="btn">{ changeText ? setbuttonText 
                          :buttonText  }</button>
                </div>


                <div className="subcontianer">
                        <p className="subText">Free Subcription</p>
                        <button className="subBtn" onClick={toggleItem}>Follow For Free</button>
                </div>

                </div>
                
                <SubComponent />
                       
            </div>
        </div>

  
)}

const MapSDispatchToProps = Dispatch=>({
        toggleItem : ()=>(Dispatch(toggleItem()))
    })
    
    export default connect (null,MapSDispatchToProps)(Home)