import React,{useEffect, useState} from 'react'
import { Segment,Comment} from 'semantic-ui-react'
import MessageForm from './messageForm'
import MessageHeader from './messageHeader'
import MessageChats from './messageChats'
import {connect} from 'react-redux'
import firebase from '../firebase'

import './message.css'

const Messages =({currentUser, currentChannel,numUniqueUsers,handleSearch,searchResult,searchTerm})=>{
    const [messageRef, setMessageRef] = useState(firebase.database().ref('message'))

    const channalName =currentChannel=>currentChannel ? `#${currentChannel.name}` : "" 
    
   
    return (
        <React.Fragment>
            <MessageHeader
            channalName={channalName(currentChannel)}
            numUniqueUsers={numUniqueUsers}
            handleSearch={handleSearch}
            />

            <Segment>
                <Comment.Group className="message_messg">
                <MessageChats
                key={currentChannel && currentChannel.id}
                currentChannel={currentChannel}
                user={currentUser} 
                messageRef={messageRef}
                searchResult={searchResult}
                searchTerm={searchTerm}
                />
             
               
                </Comment.Group>
            </Segment>

            <MessageForm
            channel={currentChannel}
            user={currentUser}
            messageRef={messageRef}
            
            />
        </React.Fragment>
    )
    }
const mapStateToProps =state =>({
    currentUser: state.user.currentUser,
    currentChannel: state.channel.currentChannel,

})

    export default connect(mapStateToProps)(Messages)