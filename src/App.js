import React, {Component} from 'react';
import './App.css';

import Home from './component/home/home'
import SubscribePage from './component/subscibePage/subscrubPage'
import Card  from './component/card/card'
import HeaderNav from './component/headerNav/headerNav'
import {Route, Switch} from 'react-router-dom'


 class  App extends Component {
  constructor(){
    super();
    this.state={
      isLoginStatus : "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin =(data)=>{
    this.setState({
      isLoginStatus : "LOGGED_IN",
      user: data
    })
  }

  render (){
  return (
    <div className="App">

    <HeaderNav/>
    
<Switch>
  
<Route exact path='/' component={Home} />


<Route
 path='/card'
  render ={ props => (
  <Card {...props} handleLogin={this.handleLogin} isLoginStatus={this.state.isLoginStatus}/>)} />

<Route  
path='/sub'
render ={ props => (
<SubscribePage {...props}  isLoginStatus = {this.state.isLoginStatus}/>)}

 />

{/* <Route  
path='/home'
render ={ props => (
<Home {...props}  isLoginStatus = {this.state.isLoginStatus}/>)}

 /> */}

 

</Switch>
      
    </div>
  )
}
}

export default App;
