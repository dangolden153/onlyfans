import React,{useState, useEffect } from 'react'
import ChannelItem from './channelItem'
import firebase from '../firebase'
import {Menu,Icon,Modal,Input,Form,Header,Button} from 'semantic-ui-react'


const Channels =({currentUser})=>{
    useEffect(()=>{
        addListener()
       
    },[])
    
   
    const [channelCollectionsRef,  setchannelref ]= useState(firebase.database().ref('channels'))
    const [modal, setModal] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [loadedChannel, setLoadedChannel] = useState([])

    const userName= currentUser.displayName
    const userPicture= currentUser.photoURL
    
    
   

    const addListener=()=>{
        let channel =[]
        channelCollectionsRef.on('child_added', snap => {
            channel.push(snap.val())
            setLoadedChannel(channel)
        })
        
    }
   

    const openModal =()=> {setModal(true)}
    const closeModal =()=> setModal(false)

    const isFormValid =()=>{
       return name && description
    }

    const addChannel=()=>{
       const key = channelCollectionsRef.push().key

        const newChannel ={
            id: key,
            name: name,
            details: description,
            createdBy: {
            name: userName,
            avatar: userPicture,
            }
        }

        channelCollectionsRef
        .child(key)
        .update(newChannel)

        .then(()=>{
            setName('')
            setDescription('')
            closeModal()
            console.log('channel added!')
        })
        .catch(err=> console.log(err))
    }

    const submitHandler =(e)=>{
        e.preventDefault()
        if (isFormValid()){
        addChannel()
        console.log('input submitted')
         
        }}

    return (
        <React.Fragment>
        <Menu.Menu>
            <Menu.Item>
                <span>
                    <Icon name="exchange"/>
                    Channels
                </span> {""}
               ({loadedChannel.length})  <Icon name="add" onClick={openModal} />
            
            </Menu.Item>

        <Menu.Item>
            <ChannelItem  />
        </Menu.Item>
        </Menu.Menu>

        <Modal basic  open={modal} onClose={closeModal}>
        <Modal.Header>Add a channel</Modal.Header>
            <Modal.Content>
                <Form onSubmit={submitHandler} >
                    <Form.Field>
                        <Input
                        fluid
                        label='channel name'
                        value={name}
                        onChange={e=> setName(e.target.value)}
                        />
                    </Form.Field>

                    <Form.Field>
                        <Input
                        fluid
                        label='about the channel '
                        value={description}
                        onChange={e=> setDescription(e.target.value)}
                        />
                        
                    </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='green' inverted onClick={submitHandler}>
                <Icon name='checkmark'/> add
                </Button>

                <Button color='red' inverted onClick={closeModal}>
                <Icon name='remove'/> cancel
                </Button>
                </Modal.Actions>
        </Modal>
        </React.Fragment>
    )
    }
    export default Channels