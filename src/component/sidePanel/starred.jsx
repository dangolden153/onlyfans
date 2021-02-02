import React, { useState, Component } from 'react'
import {setCurrentChannel,setPrivateChannel} from '../../redux/channelReducer/channelReducer.action'
import {connect} from 'react-redux'
import {Menu,Icon} from 'semantic-ui-react'

class StarredChannel extends Component{
    state={
        starredChannel: [],
        activeChannel: '',
        firtsLoad: true,
    }
   

    setActiveChannel= channel=>{
        this.setState({activeChannel: channel.id})
        this.props.setCurrentChannel(channel) 
    }

   
   

    changeChannel=channel=>{
        this.props.setCurrentChannel(channel)
        this.setActiveChannel(channel)
       this.props.setPrivateChannel(false)
    }
    
    

     displayChannel =starredChannel => {
    starredChannel.length > 0 && starredChannel.map(channel =>
    <Menu.Item 
    key={channel.id} 
    name={channel.name}
    active={channel.id === this.state.activeChannel}
    >
       # {channel.name}
      
    </Menu.Item>)}

    render(){
        const {starredChannel} = this.state
    return(
        <Menu.Menu>
            <Menu.Item>
                <sapn>
                    <Icon name='star'/>STARRED
                </sapn> {''}
                ({starredChannel.length})
            </Menu.Item>

            {this.displayChannel(starredChannel)}
        </Menu.Menu>
    )
}
}

export default connect(null,{setCurrentChannel,setPrivateChannel})(StarredChannel)