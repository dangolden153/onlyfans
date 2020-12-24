import React, {useState} from 'react'
import {picsData} from './picsData' 
import {AnimateSharedLayout, AnimatePresence, motion} from 'framer-motion'
import './pictureGallary.css'

const PictureGallary = () =>{
    const [selectedId, setSelectedId] = useState(true)


{/* <AnimateSharedLayout>
  {images.map((img) => <motion.img layoutId={img.id} />)}
  <AnimatePresence>
    {selectedId && <motion.img layoutId={selectedId} />)}
  </AnimatePresence>
</AnimateSharedLayout> */}

    return (


<AnimateSharedLayout>

        <div className="pics">
            <motion.div className="gallaryContainer">
            {
                picsData.map(pics => <motion.div 
                    className='picImgBox'
                pics={pics} layoutId={pics.id} >

                    <AnimatePresence>

                    {selectedId &&
                    <motion.div 
                    style={{
                        backgroundImage: `url(${pics.img})`
                    }}
                    className="gallaryPics"
                    
                    />
                    }
                    </AnimatePresence>

                   
                    </motion.div>)
            }
            </motion.div>
        </div>
        </AnimateSharedLayout>

    )
}

export default PictureGallary