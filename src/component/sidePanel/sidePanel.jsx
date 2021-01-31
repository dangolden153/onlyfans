import React from 'react'
import {connect} from 'react-redux'
import {Menu} from 'semantic-ui-react'
import UserPanel from './userPanel'
import Channels from './channels'
import DirectMessage from './DirectMessage'

const SidePanel =({currentUser})=>{
    
    return (
        <Menu
        vertical
        size='large'
        inverted
        fixed='left'
        style={{background: '#4c3c4c', fontSize: '1.2rem'}}
        >
            <UserPanel/>
            <Channels currentUser={currentUser}/>
            <DirectMessage  currentUser={currentUser}/>

        </Menu>
    )
    }

    const mapStateToProps= state=>({
        currentUser: state.user.currentUser
    })
    
    export default connect(mapStateToProps)(SidePanel)
   