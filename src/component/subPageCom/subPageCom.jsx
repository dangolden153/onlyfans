import React, {useState} from 'react'
import Gallary from '../gallary/gallary'
import file from '../assets/files.svg'
import vid from '../assets/video.svg'
import pics from '../assets/image.svg'
import PostGallary from '../postGallary/postGallary'

import './subPageCom'

const SubPageCom =()=>{

    const [activeClass, setactiveClass] = useState('first')

    return(
       
   



  
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

        {activeClass === 'first' && <PostGallary />}
   {activeClass === 'second' && <Gallary />}
        {/* {activeClass === 'third' && <Video />}
        {activeClass === 'forth' && <Achieve/>} */} 


       
        
       
 </div>

              
 </div>
    )
}
      

export default SubPageCom