import React,{Component} from 'react'
import {Grid,Menu} from 'semantic-ui-react'
import firebase from '../firebase'
import {setCurrentChannel} from '../../redux/channelReducer/channelReducer.action'
import { connect } from 'react-redux'

class ChannelItem extends Component{
    state ={
        channelRef : firebase.database().ref('channels'),
        channels: [],
        firtsLoad: true,
        activeChannel: ''
    }

    

     addListener=()=>{
        let channel =[]
        this.state.channelRef.on('child_added', snap => {
            channel.push(snap.val())
            this.setState({channels: channel},()=>this.setChannel(channel))
            
        })
       
    }

    componentDidMount(){
        this.addListener()
    }

    changeChannel=channel=>{
        this.props.setCurrentChannel(channel)
        this.setActiveChannel(channel)
       
    }

    setActiveChannel= channel=>{
        this.setState({activeChannel: channel.id})
        this.props.setCurrentChannel(channel)
    }

    setChannel=()=>{
        const firstChannel = this.state.channels[0]
        if (this.state.firtsLoad && this.state.channels.length > 0){
            this.props.setCurrentChannel(firstChannel)
            this.setActiveChannel(firstChannel)
        }
        this.setState({firtsLoad: false})
    }

    render(){
        const {channels,activeChannel} = this.state
        return(
            <Menu.Menu>
                
               
                    {channels.length > 0 && channels.map(channel =>
                    <Menu.Item key={channel.id} 
                    channel={channel}
                    active={channel.id === activeChannel}
                    onClick={()=>console.log(this.changeChannel(channel))} >
                       # {channel.name}
                     
                    </Menu.Item>)}
             
            </Menu.Menu>
         
          
        ) 
    }
}

export default connect(null,{setCurrentChannel})(ChannelItem)