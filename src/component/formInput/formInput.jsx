import React from 'react'

import './formInput.css'

const FormInput =({label,smallWidth, ...otherProps})=>{

    return(
        <div className={ `formInputCont `}>

            <input className={` ${smallWidth ? 'smallWidth' : ''}
            formInput`} {...otherProps} />

            {
                label?(
                    <label  className={`${otherProps.value ? 'shrink' : '' }
                    
                    formlabel`}>
                        {label}
                    </label>
                ) : null
            }
        </div>
    )
}

export default FormInput