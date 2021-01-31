import React from 'react'

import {Loader,Dimmer} from 'semantic-ui-react'


const Spinner = ()=>{
    return (
        <Dimmer active>
        <Loader size='large'/>
        </Dimmer>
    )
}

export default Spinner 