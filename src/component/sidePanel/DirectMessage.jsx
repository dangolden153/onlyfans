import React,{Component, useState} from 'react'
import firebase from '../firebase'
import {Menu,Icon} from 'semantic-ui-react'

class DirectMessage extends Component{
        state = {
            usersRef : firebase.database().ref('users'),
            users: [],
            user: this.props.currentUsers,
            connectedRef: firebase.database().ref('.info/connected'),
            presenceRef: firebase.database().ref('presence')
        }

        componentDidMount(){
            if(this.state.user)
            this.addListener(this.state.user.uid)
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

       
        addListener= currentUseruid =>{
            const {usersRef, presenceRef, connectedRef} = this.state
            let loadedUsers =[]
            usersRef.on('child_added', snap=>{
                if (currentUseruid !== snap.key){
                let user = snap.val()
                user['uid']= snap.key
                user['status'] = 'offline'
                loadedUsers.push(user)
                this.setState({users: loadedUsers})
                console.log(loadedUsers)
            }})

            connectedRef.on('value', snap =>{
                if (snap.val()=== true){
                  const ref = presenceRef.child(currentUseruid)
                  ref.set(true)
                  ref.onDisconnect().remove(err =>{
                      if(err !==null){
                          console.log(err)
                      }
                  })
                }
            })

            presenceRef.on('child_added', snap=>{
                if (currentUseruid !== snap.key){
                    this.addStatusUsers(snap.key)
                }
            })

            presenceRef.on('child_remove', snap=>{
                if (currentUseruid !== snap.key){
                    this.addStatusUsers(snap.key, false)
                }
            })
        }

        isUserOnline=user=> user.status === 'online'


    render(){
        const {users} = this.state
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
                    key={user.id}
                    onClick={console.log(user)}

                    >
                        <Icon 
                        name='round'
                        color={this.isUserOnline(user) ? 'green' : 'red'}
                        />
                        {user.name}
                    </Menu.Item>
                ))
            }

        </Menu.Menu>
    )
    }
}

export default DirectMessage