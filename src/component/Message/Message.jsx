import React,{useEffect, useState} from 'react'
import { Segment,Comment} from 'semantic-ui-react'
import MessageForm from './messageForm'
import MessageHeader from './messageHeader'
import MessageChats from './messageChats'
import {connect} from 'react-redux'
import firebase from '../firebase'

import './message.css'

const Messages =({currentUser,privateChannel, currentChannel,
    numUniqueUsers,handleSearch,searchResult,searchTerm,isStarredChannel,handleStarred})=>{


    const [messageRef, setMessageRef] = useState(firebase.database().ref('message'))
    const [privateMessageRef, setPrivateMessageRef] = useState(firebase.database().ref('privateMessage'))
    // const [userRef, setUserRef] = useState(firebase.database().ref('user'))
    // const [isStarredChannel, setIsStarredChannel] = useState(false)



    const channalName =currentChannel=>currentChannel ?
     `${privateChannel ? '@' : ''}${currentChannel.name}` : "" 
    

     const getMessagesRef= ()=>{
        return privateChannel ? privateMessageRef : messageRef
    }

    // const handleStarred =()=>{
    //     setIsStarredChannel(!isStarredChannel)
    //     StarredChannel()
    // }

    // const StarredChannel =()=>{
    //     if(isStarredChannel ){
    //         console.log('starred')
    //         userRef.child(`${currentUser.uid}/starred`)
    //         .update({
    //             [currentChannel.id] :{
    //                 name: currentChannel.name,
    //                 details: currentChannel.details,
    //                 createdBy: {
    //                     name: currentChannel.createdBy.name,
    //                     avatar: currentChannel.createdBy.avatar
    //                 }
    //             }
    //          })
           
    //     } else{
    //         userRef
    //         .child(`${currentUser.uid}/starred`)
    //         .child(currentChannel.id)
    //         .remove(err=>{
    //             if(err !== null){
    //                 console.log(err)
    //             }
    //         })

    //         console.log('not starred')
    //     }
    // }

   
    return (
        <React.Fragment>
            <MessageHeader
            channalName={channalName(currentChannel)}
            numUniqueUsers={numUniqueUsers}
            handleSearch={handleSearch}
            privateChannel={privateChannel}
            handleStarred={handleStarred}
            isStarredChannel={isStarredChannel}
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
                privateMessageRef={privateMessageRef}
                privateChannel={privateChannel}
                />
             
               
                </Comment.Group>
            </Segment>

            <MessageForm
            channel={currentChannel}
            user={currentUser}
            messageRef={messageRef}
            getMessagesRef={getMessagesRef}
            />
        </React.Fragment>
    )
    }
const mapStateToProps =state =>({
    currentUser: state.user.currentUser,
    currentChannel: state.channel.setCurrentChannel,
    privateChannel: state.channel.privateChannel,
    

})

    export default connect(mapStateToProps)(Messages)