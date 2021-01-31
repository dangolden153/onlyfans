import React,{Component} from 'react'
import {Comment,Menu} from 'semantic-ui-react'
import firebase from '../firebase'
import MessageChatsItems from './MessageChatsItems'


class MessageChats extends Component{

    state={
        channel: this.props.currentChannel,
        user: this.props.user,
        messageRef: this.props.messageRef,
        messages:[],
        messageIsLoading: true,
        numUniqueUsers: '',
        searchTerm: this.props.searchTerm,
        searchResult: this.props.searchResult,
    }

    componentDidMount(){
        

        if(this.props.currentChannel && this.props.user){
        this.addListener(this.props.currentChannel.id)
    }}

    addListener=channelId=>{
        this.addMessageListener(channelId)
    }

    addMessageListener=channelId=>{
        let loadedMessages = []

        this.state.messageRef.child(channelId).on("child_added", snap=>{
            loadedMessages.push(snap.val())
            console.log(loadedMessages)
            this.setState({messages: loadedMessages, messageIsLoading: false })
        })
    } 

//    displayMessages=messages=> {
//        const {user} = this.state
//        messages.length > 0 && messages.map(message=>( 
//         <MessageChatsItems
//         //  searchTerm={searchTerm} 
//         //  searchResult={searchResult}
//          key={message.timeStamp}  
//          user={user}  
//          message={message} />))}
   

    render(){

       const {messages,user,searchTerm,searchResult} = this.state

        return(
            <React.Fragment>
          
            <Comment>
         {
      
       messages.length > 0 && (searchTerm ? searchResult : messages).map(message=>( 
        <MessageChatsItems
         searchTerm={searchTerm} 
         searchResult={searchResult}
         key={message.timeStamp}  
         user={user}  
         message={message} />))}
             
            </Comment>

            </React.Fragment>
        )
    }
}



export default MessageChats