import React,{useState} from 'react'
import firebase from '../firebase'
import {Button, Header, Icon, Form, Segment, Grid, Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

// import './register.css'

const Login = ()=>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)



    const isFormEmpty =()=>{
        return !email.length || !password.length 
    }

   

    const isFormValid=()=>{
        if (isFormEmpty()){
            setError('the form is empty, can you please fill the form')
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
        .signInWithEmailAndPassword(email, password)
        .then(res =>{ 
            console.log(res)
            setLoading(false)
            setEmail('')
            setPassword('')
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
            
        
       }
    }


  

    return(
        <Grid textAlign='center' verticalAlign='middle' className='register'>
            <Grid.Column style={{maxWidth : 450}}>
                <Header as='h2' icon color='violet' textAlign='center'>
                <Icon name='puzzle piece' color='orage' />
                 Login
                </Header>

                <Form size='large'  onSubmit={handleSubmit}>
                <Segment>

        
        <Form.Input fluid icon='mail' iconPosition='left' value={email}
        placeholder='email' name='email' type='email' onChange={e => setEmail(e.target.value)}  />

        <Form.Input fluid icon='lock' iconPosition='left' value={password}
        placeholder='password' name='password' onChange={e => setPassword(e.target.value)} />

    
    <Button disabled={loading} className={loading ? 'loading' : ''} type="submit" fluid color='violet'>submit</Button>

                </Segment>
        <Message> don't have an account? <Link to='/register'>Sign up</Link> </Message>

                </Form>
           { error ? <Message error >{error}</Message> : null}
            </Grid.Column>
        </Grid>
    )
}

export default Login