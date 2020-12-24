import React,{useState} from 'react'
import pics from '../../component/assets/onlyfans7.jpg'
import dp from '../../component/assets/onlyfans10.jpg'
import svg from '../../component/assets/left-arrow.svg'
import menuSvg from '../../component/assets/menu.svg'

import SubPageCom from '../../component/subPageCom/subPageCom'

import './subscribePage.css'

const SubscribePage =()=>{
    const [changeText , setchangeText] = useState(false)
    const [state, setState] = useState(false)
    
    const buttonText ='More info'
    const setbuttonText ='collaspe'
    
    const toggleBtn = ()=>{
            setchangeText(!changeText)
    }
    return(
        <>
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
                <div className="navbarIcon"
                style={{
                        backgroundImage: `url(${menuSvg})`
                }}
                />                </div>


               


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
                
                <SubPageCom />
               
                
        
            </div>
        </div>

        </>
    )
}

export default SubscribePage