import React, {useState} from 'react'
import Video from '../video/video'
import Files from '../files/files'
import Picture from '../pictures/pictures'
import Achieve from '../achieve/achieve'
import SubBenefit from '../subBenefit/subBenefit'
import './subComponent.css'
import pics from '../assets/bag.svg'



const SubComponent =()=>{
    const [state, setState] = useState(true)
    const [activeClass, setactiveClass] = useState('first')

    const toggleState = ()=>{
        setState(!state)
}

    return (
<div className='subComponent'>
        <div className='btnContainer'>

<button className={activeClass  === 'first' ? 'active ': 'subComponentbtn' }onClick={()=>setactiveClass('first') }>
<div className="svgImg" >
        <img src={pics} alt="profile img" className='profileImg'/>
     </div>
</button>

<button className={activeClass === 'second' ? 'active ': 'subComponentbtn' } onClick={()=>setactiveClass('second')}>
    <div className="svgImg" >
        <img src={pics} alt="profile img" className='profileImg'/>
     </div>
</button>

<button className={activeClass === 'third' ? 'active ': 'subComponentbtn' } onClick={()=>setactiveClass('third')}> 
<div className="svgImg" >
        <img src={pics} alt="profile img" className='profileImg'/>
     </div>
</button>

<button className={activeClass === 'forth' ? 'active ': 'subComponentbtn' } onClick={()=>setactiveClass('forth')}> 
<div className="svgImg" >
        <img src={pics} alt="profile img" className='profileImg'/>
     </div>
</button>

 </div>

 <div className='subContent'>

        {activeClass === 'first' && <Files />}
        {activeClass === 'second' && <Picture />}
        {activeClass === 'third' && <Video />}
        {activeClass === 'forth' && <Achieve/>}


        <button onClick={toggleState}
        className="pictureBtn">
            SUBSCRIBE TO SEE USER'S POSTS
         </button>
        
       
 </div>

 <div
               className={state ? "active" : "subBenefitBox"}>
                   <div className="cancel"
                   style={{
                       height:'10px',
                       width: '10px',
                       background: 'white'
                   }}
                   ></div>
               <SubBenefit/>
               </div>
 </div>
    )
}

export default SubComponent