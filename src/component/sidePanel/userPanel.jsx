import React,{useEffect, useState} from 'react'
import {Grid, Header,Icon, Dropdown, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import firebase from '../firebase'

const UserPanel =({currentUser})=>{

    const [user, setUser] = useState();
    const [userImg, setUserImg] = useState();
        
        useEffect(()=>{
            setUser(currentUser.displayName)
            setUserImg(currentUser.photoURL)
            
        },[])

    

    const signOut =()=>{
        firebase.auth().signOut()
        .then(()=>console.log('sign out'))
        .catch(err=> console.log(err))
    }

    const dropDownOptions =[
        {
            key: 'user',
            text: <span>sign in as <strong>{user}</strong></span>,
            disable: true
        },

        {
            key: 'avatar',
            text: <span>change Avatar</span>,
            
        },

        {
            key: 'signout',
            text: <span onClick={signOut}>sign out</span>,
           
        },
    ]

    

    return(
        <Grid>
        <Grid.Column>
            <Grid.Row style={{padding: "1.2em", margin: 0}} >
                <Header as='h2' floated='left' inverted style={{ margin: 0}}> 
                    <Icon name='code'/>
                    <Header.Content>Let's Chat</Header.Content>
                </Header>

                <Header as='h4'  inverted style={{ padding: '1.5em 0.25em'}}>
                <Dropdown 
                trigger={< span>
                <Image src={userImg} spaced='right' avatar/>
                {user}
                </span>}  
                   options={dropDownOptions} />


                </Header>
            </Grid.Row>



        </Grid.Column>
        </Grid>
    )
}

const mapStateToProps= state=>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(UserPanel)