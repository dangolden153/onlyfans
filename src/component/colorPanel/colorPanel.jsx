import React from 'react'
import {Menu, Divider, Button, Sidebar} from 'semantic-ui-react'

const ColorPanel =()=>{
    return (
        <Sidebar
        width="very thin"
        vertical
        as={Menu}
        visible
        icon="labeled"
        inverted
        >
        <Divider/>
        <Button icon="add" color="blue" size="small" />
        </Sidebar>
    )
    }
    export default ColorPanel