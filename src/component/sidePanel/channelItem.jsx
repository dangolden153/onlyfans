import React,{Component} from 'react'
import {Grid,Menu,Label} from 'semantic-ui-react'
import firebase from '../firebase'
import {setPrivateChannel,setCurrentChannel} from '../../redux/channelReducer/channelReducer.action'
import { connect } from 'react-redux'

class ChannelItem extends Component{
    state ={
        channelRef : firebase.database().ref('channels'),
        channels: [],
        firtsLoad: true,
        activeChannel: '',
        channel: null,
        messageRef: firebase.database().ref('message'),
        notifications:[],
    }

    

     addListener=()=>{
        let channel =[]
        this.state.channelRef.on('child_added', snap => {
            channel.push(snap.val())
            this.setState({channels: channel},()=>this.setChannel(channel))
            this.addNotificationListener(snap.key)
        })
       
    }

    addNotificationListener =channelId =>{
    this.state.messageRef.child(channelId).on('value', snap=>{
        if(this.state.channel){
        
        this.handleNotification(channelId, this.state.channel.id, this.state.notifications, snap )
        } 
    })
       
    }

    handleNotification = (channelId,currentChannelId,notifications,snap )=>{

        let lastTotal = 0
        let index = notifications.findIndex(notification => notification.id === channelId)
        
        if(index !== -1){
            if(channelId !== currentChannelId){
                lastTotal = notifications[index].total

                if(snap.numChildren() - lastTotal > 0){
                    notifications[index].count = snap.numChildren() - lastTotal
                }
            }

            notifications[index].lastKnownTotal = snap.numChildren()
        } else{
            this.state.notifications.push({
                id: channelId,
                total: snap.numChildren(),
                lastKnownTotal: snap.numChildren(),
                count: 0
            })

            console.log(notifications)
        }
        
        this.setState({notifications: notifications})

        
    }

    componentDidMount(){
        this.addListener()
    }

    changeChannel=channel=>{
        this.props.setCurrentChannel(channel)
        this.setActiveChannel(channel)
       this.props.setPrivateChannel(false)
       this.setState({channel: channel})
       this.clearNotifications()
    }

    clearNotifications=()=>{
        let index = this.state.notifications.findIndex(notification => 
            notification.id ===this.state.channel.id)

        if (index !== -1){
            let  updatednotification = [...this.state.notifications]
            updatednotification[index].total = this.state.notifications[index].lastKnownTotal;
            updatednotification[index].count = 0
            this.setState({notifications: updatednotification})
    }}


    setActiveChannel= channel=>{
        this.setState({activeChannel: channel.id})
        this.props.setCurrentChannel(channel) 
    }



    setChannel=()=>{
        const firstChannel = this.state.channels[0]
        if (this.state.firtsLoad && this.state.channels.length > 0){
            this.props.setCurrentChannel(firstChannel)
            this.setActiveChannel(firstChannel)
            this.setState({channel: firstChannel })
        }
        this.setState({firtsLoad: false})
    }

    getNotificationCount = channel=>{
        let count = 0
        this.state.notifications.forEach(notification=>{
            if(notification.id === channel.id){
                count = notification.count
            }
        })

        if (count > 0){ return count}
    }


    render(){
        const {channels,activeChannel} = this.state
        return(
            <Menu.Menu>
                
               
                    {channels.length > 0 && channels.map(channel =>
                    <Menu.Item 
                    key={channel.id} 
                    
                    active={channel.id === activeChannel}
                    onClick={()=>console.log(this.changeChannel(channel))}
                    >
                        {this.getNotificationCount(channel) && (
                        <Label color='red' >{this.getNotificationCount(channel)}</Label>
                        )}
                       # {channel.name}
                      
                    </Menu.Item>)}
             
            </Menu.Menu>
         
          
        ) 
    }
}

export default connect(null,{setCurrentChannel,setPrivateChannel})(ChannelItem)