import React,{Component, useState} from 'react'
import firebase from '../firebase'
import {Menu,Icon} from 'semantic-ui-react'
import {setPrivateChannel,setCurrentChannel} from '../../redux/channelReducer/channelReducer.action'
import {connect} from 'react-redux'

class DirectMessage extends Component{

        state = {
            user: this.props.currentUser,
            users: [],
            usersRef : firebase.database().ref('user'),
            connectedRef: firebase.database().ref('.info/connected'),
            presenceRef: firebase.database().ref('presence'),
            activeChannel: ''
        }


        componentDidMount(){
            if(this.props.currentUser)
            this.addListener(this.props.currentUser.uid)
        }


        

       
        addListener= currentUseruid =>{
            const {usersRef, presenceRef, connectedRef} = this.state

            let loadedUsers =[]
            this.state.usersRef.on('child_added', snap=>{
                if (currentUseruid !== snap.key){
                let user = snap.val()
                user["uid"]= snap.key
                user["status"] = "offline"
                loadedUsers.push(user)
                this.setState({users: loadedUsers})
            }})

            connectedRef.on('value', snap =>{
                if (snap.val() === true){
                  const ref = presenceRef.child(currentUseruid)
                  ref.set(true)
                  ref.onDisconnect().remove(err =>{
                      if(err !==null){
                          console.log(err)
                      }
                  })
                }
            });

            presenceRef.on('child_added', snap=>{
                if (currentUseruid !== snap.key){
                    this.addStatusUsers(snap.key)
                }
            })

            presenceRef.on('child_removed', snap=>{
                if (currentUseruid !== snap.key){
                    this.addStatusUsers(snap.key, false)
                }
            })
        }


        addStatusUsers =(userId, connected = true)=>{
            const updatedUser = this.state.users.reduce((acc, user)=>{
                if(user.uid === userId){
                    user['status'] = `${connected ? 'online' : 'offline'}`
                }
                return acc.concat(user)
            },[])

            this.setState({users: updatedUser})
        }

        isUserOnline=user=> user.status === 'online'

        changeChannel =user=> {
            const channelId = this.getChannelId(user.uid)
            const channelData = {
                id: channelId,
                name: user.name
            }
            this.props.setCurrentChannel(channelData)
            this.props.setPrivateChannel(true)
            this.setState({activeChannel: user.uid})
        }

        getChannelId = userId =>{
            const currentUserId = this.props.currentUser.uid
            return userId < currentUserId ?
            `${userId}/${currentUserId}` : `${currentUserId}/${userId}`

            
        }

    render(){

        const {users,user,activeChannel} = this.state


    return(
        <Menu.Menu className="menu">
        <Menu.Item >
            <span>
            <Icon name='mail'/> DIRECT MESSAGES 
            </span> {''}
            ({users.length})

        </Menu.Item>
            {
                users.map(user =>(
                    <Menu.Item
                    key={user.uid}
                    active={user.uid === activeChannel}
                    onClick={()=>this.changeChannel(user)}
                    >
                        <Icon 
                        name='circle'
                        color={this.isUserOnline(user) ? 'green' : 'red'}
                        />
                        {user.name}
                       
                    </Menu.Item>
                ))}

        </Menu.Menu>
    )
    }
}

const mapStateToProps= state=>({
    currentUser: state.user.currentUser
})


export default connect(mapStateToProps,{setPrivateChannel,setCurrentChannel}) (DirectMessage)