import React from 'react'
// import moment from 'moment'
import {Comment} from 'semantic-ui-react'


const MessageChatsItems =({user, message,searchTerm,searchResult})=>{
    
    // const timeFromNow=(timeStamp)=>{
    //     moment(timeStamp).fromNow()
    // }
 
        return(
 
        <Comment className={message.users.id === user.uid ? "message_self": ""}>
            <Comment.Avatar src={message.users.avatar}/>
            <Comment.Content  >
            <Comment.Author as="a">{message.users.name}</Comment.Author>
            {/* <Comment.Metadata>{timeFromNow(message.timeStamp)}</Comment.Metadata> */}
            <Comment.Text>{ message.contents}</Comment.Text>
            </Comment.Content>
        </Comment>
        
    )

        }
export default MessageChatsItems