import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



function Login(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function Logout(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

function UserGreeting() {
  return <h1>Welcome Back ! </h1>
}

function GuestGreeting() {
  return <h1>Please Register</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      isToggleOn: true
    }
  }
  handleLoginClick = e => {
    this.setState({
      isToggleOn: true
    })
  }
  handleLogoutClick = e => {
    this.setState({
      isToggleOn: false
    })
  }
  // handleClick = (e,id) => {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }))
  // }
  
  render() {
    const isLoggedin = this.state.isToggleOn;
    let button;
    if (isLoggedin){
      button = <Logout onClick={this.handleLogoutClick}/>
    }
    else{
      button = <Login onClick={this.handleLoginClick}/>
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedin}/>
        {button}
      </div>
    );
  }
}

export default App;
