import React, {useState} from 'react'
import Video from '../video/video'
import Files from '../files/files'
import Picture from '../pictures/pictures'
import Achieve from '../achieve/achieve'
import SubBenefit from '../subBenefit/subBenefit'
import {connect } from 'react-redux'
import {toggleItem} from '../../redux/componentReducer/componentReducer.action'
import './subComponent.css'
import file from '../assets/files.svg'
import vid from '../assets/video.svg'
import pics from '../assets/image.svg'
// import pics from '../assets/bag.svg'



const SubComponent =({hidden,toggleItem})=>{
    const [activeClass, setactiveClass] = useState('first')



    return (
<div className='subComponent'>
        <div className='btnContainer'>

<button className={activeClass  === 'first' ? 'active ': 'subComponentbtn' }onClick={()=>setactiveClass('first') }>
<div className="svgImg" >
        <img src={file} alt="profile img" className='profileImg'/>
     </div>
</button>

<button className={activeClass === 'second' ? 'active ': 'subComponentbtn' } onClick={()=>setactiveClass('second')}>
    <div className="svgImg" >
        <img src={pics} alt="profile img" className='profileImg'/>
     </div>
</button>

<button className={activeClass === 'third' ? 'active ': 'subComponentbtn' } onClick={()=>setactiveClass('third')}> 
<div className="svgImg" >
        <img src={vid} alt="profile img" className='profileImg'/>
     </div>
</button>

<button className={activeClass === 'forth' ? 'active ': 'subComponentbtn' } onClick={()=>setactiveClass('forth')}> 
<div className="svgImg" >
        <img src={file} alt="profile img" className='profileImg'/>
     </div>
</button>

 </div>

 <div className='subContent'>

        {activeClass === 'first' && <Files />}
        {activeClass === 'second' && <Picture />}
        {activeClass === 'third' && <Video />}
        {activeClass === 'forth' && <Achieve/>}


        <button onClick={toggleItem}
        className="pictureBtn">
            SUBSCRIBE TO SEE USER'S POSTS
         </button>
        
       
 </div>


                   
            {  hidden ? <SubBenefit/> : null } 
              
 </div>
    )
}

const MapStateToProps = ({State :{hidden}}) =>({
    hidden
})


const MapSDispatchToProps = Dispatch=>({
    toggleItem : ()=>(Dispatch(toggleItem()))
})

export default connect (MapStateToProps,MapSDispatchToProps)(SubComponent)