import React, {useState} from 'react'
import Video from '../video/video'
import Files from '../files/files'
import Picture from '../pictures/pictures'
import Achieve from '../achieve/achieve'

import './subComponent.css'
import pics from '../assets/bag.svg'



const SubComponent =()=>{
    const [state, setState] = useState(true)
    const [activeClass, setactiveClass] = useState('first')

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



       '
 </div>

 </div>
    )
}

export default SubComponent