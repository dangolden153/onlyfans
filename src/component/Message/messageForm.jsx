import React,{useState} from 'react'
import {Segment, Input,Button} from 'semantic-ui-react'
import FileModal from './fileModal'
import firebase from '../firebase'

const MessageForm =({channel,user,messageRef})=>{

    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState([])
    const [modal, setModal] = useState(false)

    const openModal=()=> setModal(true)
    const closeModal=()=> setModal(false)

    const creatMessage =()=>{
        const messages ={
            timeStamp : firebase.database.ServerValue.TIMESTAMP,
            contents: message,
            users: {
                id: user.uid,
                name: user.displayName,
                avatar: user.photoURL
            }
        }
        return messages
    }

    const submitMessage=()=>{
        console.log(message)
        setIsLoading(true)
        if (message){
            messageRef
            .child(channel.id)
            .push()
            .set(creatMessage())

            .then(()=> {
                console.log(message)
                setIsLoading(false)
                setMessage('')

            }) .catch(err => {
                console.log(err)
                setIsLoading(false)
            })


        } else {
            setError({message: 'add a message'})
        }
    }

    return(
        <Segment className="message_form">


            <Input
            placeholder="write your message"
            label={<Button icon="add"/>}
            name="message"
            fluid
            labelPosition="left"
            style={{marginBottom: '10px'}}
            value={message}
             onChange={e=> setMessage(e.target.value)}
            
            />


            <Button.Group icon widths='2' >
                <Button
                color="orange"
                 content="add reply"
                 disabled={isLoading}
                 floated="left"
                 icon="edit"
                 onClick={submitMessage}
                 
                />
                <Button
                color="teal"
                content="cloud media"
                icon="cloud upload"
                floated="right"
                onClick={openModal}
                />

                <FileModal 
                modal={modal}
                closeModal={closeModal}
                />
            </Button.Group>
        </Segment>
    )
}

export default MessageForm