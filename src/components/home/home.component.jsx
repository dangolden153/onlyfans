import  React from 'react';
import './home.styles.css'
import pics from '../pictures/m6.jpg'
import Section1 from '../section1/section1.component'
import Section2 from '../SECTION2/section2.component'
import Section3 from '../senction3/senction3.component'
import Section4 from '../section4/section4.component'
import Footer from '../footer/footer.component'
import halfStar from '../pictures/half-star-shape.svg'
import star from '../pictures/star.svg'
import blackStar from '../pictures/star-black.svg'
import motelLogo from '../pictures/motel6-logo.png'
import Text from '../text'

const Home =()=>{

    return(
<div className="home-container">

<div className="top-container">
<div className="text-input">
    <div className="motel-logo">
        <img src={motelLogo} alt=" motel logo" className='img'/>
    </div>
    </div>

    
    <div className="text-input dp-n">
        <div className="input-text ">check in </div>
        <div className="input ">10/10/2020</div>
    </div>
    <div className="text-input">
        <div className="input-text">nights</div>
        <div className="input">
            <select name="" id="option" className="select">
                <option value="option" className="option">1 night</option>
                <option value="option" className="option">2 nights</option>
                <option value="option" className="option">3 nights</option>
                <option value="option" className="option">4 nights</option>
                </select>
        </div>
    </div>
    <div className="text-input">
        <div className="input-text">adults</div>
        <div className="input">
        <select name="" id="option" className="select">
                <option value="option" className="option">1 adult</option>
                <option value="option" className="option">2 adults</option>
                <option value="option" className="option">3 adults</option>
                <option value="option" className="option">4 adults</option>
                </select>
        </div>
    </div>

    <div className="text-input">
        <div className="inputText">go </div>
    </div>
    
    </div>

    <div className="header-backrgound">
        <div className="header-text">
        Motel 6 Greenwood Village, CO - Denver - South Tech Center 
                     <span className="small-text">
                 #1249 
                 <span className="google-star-box">
                 <span className='google'>6 (google review)
                </span> 
                <div className="star-container">
                <div className="star-svg"><img src={star} alt="review svg icon"/></div>
                    <div className="star-svg"><img src={star} alt="review svg icon"/></div>
                    <div className="star-svg"><img src={star} alt="review svg icon"/></div>
                    <div className="star-svg"><img src={halfStar} alt="review svg icon"/></div>
                    <div className="star-svg"><img src={blackStar} alt="review svg icon"/></div>
                </div>
                 </span>
                
             </span> 
        </div>
        <div className="header-img">
            <img src={pics} alt="motel img"/>
        </div>
    </div>

<Section1/>
    

<Section2/>

<Section3/>

<Section4/>

<Footer/>



</div>

    )
}

export default Home;