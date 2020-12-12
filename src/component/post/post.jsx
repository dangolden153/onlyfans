import React, {useState} from 'react'

import './post.css'

const Post =({component})=>{
 const NavItems = Array.from(Object.keys(component))
 const [activeItem, setactiveItem] = useState(0)

    return(
        component && (<div className='compBox'>
            <div className="fullwidth">
            <ul className="list">
                {
                   NavItems?.length > 0 &&
                   NavItems.map((navItem, idx )=>(
                        <li 
                        key={idx}
                        className={`items ${NavItems.length === 1 ?
                         'fullListWith' : `noIdth/` + NavItems.length }
                         ${activeItem === idx ? 'whiteBg' : 'pinkbg'}`}
                          onClick={()=> setactiveItem(idx)}      >

                              <span>{navItem}</span>
                        </li>
                   ))
                }
            </ul>

            </div>
    <div className="">{component[NavItems[activeItem]]}</div>
        </div>
        
        )
    )
}

export default Post