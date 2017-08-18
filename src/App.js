import React, { Component } from 'react';
//Main Components across entire application
import FixedMenuLayout from './components/main/FixedMenuComponent'
import Home from './components/main/Home'
import Login from './components/user/Login'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
//Routes
import SearchRouter from './routes/SearchRouter'
import UserRouter from './routes/UserRouter'
import EventsRouter from './routes/EventsRouter'
//Authentication
import AuthAdapter from './components/auth/AuthAdapter'
import Auth from './components/auth/Authorize'
import PropTypes from 'prop-types'




class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  state = {
    auth: {
      headers: AuthAdapter.headers
    }
  }

  isLoggedIn = () => !!window.localStorage.jwt

  onLogin(loginParams) {
    AuthAdapter.login(loginParams)
    .then( res => {
      if (res.error ) {
        console.log("do nothing")
      } else {
        console.log(res)
        localStorage.setItem('jwt', res.jwt)
        this.context.router.history.push('/user/home')
      }
    })
  }

  handleLogout () {
    localStorage.clear()
    this.context.router.history.push('/login')
  }

  render() {
    return (
      <Router>
      <div>
        <FixedMenuLayout isLoggedIn={this.isLoggedIn}/>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' render={() => <Login onSendLogin={this.onLogin.bind(this)} isLoggedIn={this.isLoggedIn}/>}/>
        <Route path='/user' component={UserRouter} />
        <Route path='/events' component={EventsRouter} />
        <Route path='/search' component={SearchRouter} />
      </div>
      </Router>
    );
  }
}

export default App;
