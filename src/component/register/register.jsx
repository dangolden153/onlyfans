import React,{useState} from 'react'
import firebase from '../firebase'
import {Button, Header, Icon, Form, Segment, Grid, Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import './register.css'

const Register = ()=>{
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [comfirmPassword, setComfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [userRef, setUserRef] = useState(firebase.database().ref('user'))



    const isFormEmpty =()=>{
        return !username.length || !email.length 
        || !password.length || !password.length 
    }

    const passwordValid =()=>{
        
        return password.length < 6 || comfirmPassword.length < 6 
       
    }

    const passwordIncorrect =()=>{
        
        return  password !== comfirmPassword

       
    }

    const isFormValid=()=>{
        if (isFormEmpty()){
            setError('the form is empty, can you please fill the form')
            return false 

        } else if(passwordValid()){
            
            setError('password must be have at least 6 characters')
            return false 

        } else if(passwordIncorrect()) {
          
            setError('password mismatched!')

            return false

        } else {
            return true
        }


    }


    const handleSubmit =(e)=>{
       if (isFormValid()){
           setLoading(true)
        e.preventDefault()
        console.log(email, password)
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password )
        .then(currentUser =>{
            console.log(currentUser)
            setUserName('')
            setEmail('')
            setPassword('')
            setComfirmPassword('')
            
            currentUser.user.updateProfile({
                displayName: username,
                photoURL: 'https://images.pexels.com/photos/3319466/pexels-photo-3319466.jpeg'
            })
            

            .then(()=>{
                saveUser(currentUser)
                

                .then(()=>{
                    console.log('save')
                    setLoading(false)
                })

            }) .catch(err=>{setLoading(false)
                 console.log(err)})
            })
            
            .catch(err => {
            console.log(err)
            setLoading(false)
        })
       }
    }

    const saveUser=(currentUser)=>{
       return userRef.child(currentUser.user.uid).set({
            name: currentUser.user.displayName,
            avatar: currentUser.user.photoURL
        })
    }

  

    return(
        <Grid textAlign='center' verticalAlign='middle' className='register'>
            <Grid.Column style={{maxWidth : 450}}>
                <Header as='h2' icon color='orange' textAlign='center'>
                <Icon name='puzzle piece' color='orage' />
                 Sign up
                </Header>

                <Form size='large'  onSubmit={handleSubmit}>
                <Segment>

        <Form.Input fluid icon='username' iconPosition='left'
        placeholder='username' name='username' onChange={e => setUserName(e.target.value)} value={username} />

        <Form.Input fluid icon='mail' iconPosition='left' value={email}
        placeholder='email' name='email' type='email' onChange={e => setEmail(e.target.value)}  />

        <Form.Input fluid icon='lock' iconPosition='left' value={password}
        placeholder='password' name='password' onChange={e => setPassword(e.target.value)} />

        <Form.Input fluid icon='lock' iconPosition='left' value={comfirmPassword}
        placeholder='Comfirm password' name='ComfirmPassword' onChange={e => setComfirmPassword(e.target.value)} />

    <Button disabled={loading} className={loading ? 'loading' : ''} type="submit" fluid color='orange'>submit</Button>

                </Segment>
        <Message> Already a user? <Link to='/login'>Login</Link> </Message>

                </Form>
           { error ? <Message error >{error}</Message> : null}
            </Grid.Column>
        </Grid>
    )
}

export default Register