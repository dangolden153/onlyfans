import React, {Component} from 'react';
import './App.css';
import Forms from './component/form-input/form-input'
import Home from './component/home/home'
// import Home fro./components/home/home.componentent';
// import Input_data from './pages/input-data/input-data.component'
// import Text fro./components/textext'
// import HomePage fro./components/hompageage'
// import Dasboard fro./components/dasboardard'

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

<Switch>
  
{/* <Route
 exact
 path='/'
  render ={ props => (
  <HomePage {...props} handleLogin={this.handleLogin} isLoginStatus = {this.state.isLoginStatus}/>)} />

<Route  
path='/dasboard'
render ={ props => (
<Dasboard {...props}  isLoginStatus = {this.state.isLoginStatus}/>)}

 />

<Route  
path='/home'
render ={ props => (
<Home {...props}  isLoginStatus = {this.state.isLoginStatus}/>)}

 /> */}

 <Route path='/' exact component={Home} />
 <Route path='/form' component={Forms} />

</Switch>
      
    </div>
  )
}
}

export default App;
