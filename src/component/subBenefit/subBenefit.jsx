import React from 'react'
import profile from '../assets/onlyfans5.jpg'
import dp from '../assets/onlyfans10.jpg'
import {toggleItem} from '../../redux/componentReducer/componentReducer.action'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import cancelSvg from '../assets/white-cancel.svg'
import svg from '../assets/checked.svg'

import './subBenefit.css'

const SubBenefit = ({toggleItem})=>{

    return(
        <div className="subBenefit">
            <div className="benefitBg" onClick={toggleItem}/>
            <div className="benefitCont">

            <div className="cancelSvg"
            onClick={toggleItem}
            style={{
                backgroundImage:`url(${cancelSvg})`
            }}
            ></div>

            <div className="subBenefitImgBox">

            <div className="subBenefitImg"
            style={{
                backgroundImage :`url(${profile})`
            }}
            />

            <div className="subBenefitDp">
            <img src={dp} alt="benefit dp"/>
            </div>

            </div>


            <p className="benefitName">
            Janet Nicholas
            </p>
            <p className="benefitEmail">
                @Janetnicholas
            </p>

            <div className="contentBox">
            <h3 className="contentHeader">
                subscription benefits:
            </h3>

            <div className="benefitContent">
            <div className="contentSvg"
                style={{
                    backgroundImage:`url(${svg})`
                }}
                /> 
                 <div className="contentText">
                    Full access to the User's content
                </div>
            </div>

            <div className="benefitContent">
                <div className="contentSvg"
                style={{
                    backgroundImage:`url(${svg})`
                }}
                />
                <div className="contentText">
                    Direct message with this user
                </div>
            </div>

            <div className="benefitContent">
            <div className="contentSvg"
                style={{
                    backgroundImage:`url(${svg})`
                }}
                />                <div className="contentText">
                    Cancel your subscription at any time
                </div>
            </div>

            <div className="benefitContent">
            <div className="contentSvg"
                style={{
                    backgroundImage:`url(${svg})`
                }}
                /> 
                <div className="contentText">
                    This profile may contain media only suitable to those over 
                    the age of 18
                </div>
            </div>

            <button className="benefitBtn">
        <div className="benefitContent">
                <div className="contentSvg"></div>

                <Link to='/card' className='subComponentLink'>
                <div className="btncontentText">
                    PLEASE ADD A PAYMENT CARD
                </div>
                </Link>
            </div>
        </button>

        <p className="cardInfo">
            Your card will not be charge as this subscription is free
        </p>
        </div>

        
            
       
            </div>
        </div>

    )
}

const MapDispatchToProps = Dispatch=>({
    toggleItem : ()=> (Dispatch(toggleItem()))
})

export default connect(null,MapDispatchToProps ) (SubBenefit)