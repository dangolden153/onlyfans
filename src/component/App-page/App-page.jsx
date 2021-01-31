import React from 'react'
import {Grid} from 'semantic-ui-react'
import ColorPanel from '../colorPanel/colorPanel'
import SidePanel from '../sidePanel/sidePanel'
import Message from '../Message/Message'
import MetaPanel from '../metaPanel/metaPanel'
import MessageContainer from '../Message/MessageContainer'
import {connect} from 'react-redux'

import './appPage.css'

const AppPage =({currentUser,currentChannel})=>{

    return(
        <Grid columns='equal' className="appContainer" >
            <ColorPanel/>
            <SidePanel/>

            <Grid.Column style={{marginLeft: 320}}>
            <MessageContainer 
            key={currentChannel && currentChannel.id}
            currentChannel={currentChannel}
            currentUser={currentUser}
            />
            </Grid.Column>
            
           <Grid.Column width={4}>
            <MetaPanel/>
            </Grid.Column>
        </Grid>
    )
}
const mapStateToProps =state =>({
    currentUser: state.user.currentUser,
    currentChannel: state.channel.currentChannel,

})

export default connect(mapStateToProps) (AppPage)