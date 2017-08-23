import React, { Component } from 'react';
//Main Components across entire application
import FixedMenuLayout from './components/main/FixedMenuComponent'
import Home from './components/main/Home'
import Login from './components/user/Login'
import UserSignup from './components/user/Signup'
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
//Routes
import SearchRouter from './routes/SearchRouter'
import UserRouter from './routes/UserRouter'
import EventsRouter from './routes/EventsRouter'
//Authentication
import AuthAdapter from './components/auth/AuthAdapter'
//User
import UserEvent from './components/user/UserEvent'
import { Helmet } from 'react-helmet'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: {
        isLoggedIn: false,
        user: '',
        user_id: ''
      },
      errors: ""
    }
  }

  componentDidMount = () => {
    if(localStorage.getItem('jwt')){
      this.setState({
        auth:{
          isLoggedIn: true,
        }
      })
    }
  }


  onLogin = (loginParams) => {
  AuthAdapter.login(loginParams)
    .then( res => {
      //check for an error message
      if( res.errors ){
         this.setState({
           errors: res.errors
         })
      }else{
        console.log(res)
        localStorage.setItem('jwt', res.jwt)
        this.setState({
          auth:{
            isLoggedIn: true,
            user: res.username,
            user_id: res.user
          }
        })
      }
      //if error render login again
      //else set the jwt token and forward user to /giphs
    })
  }

  onSignup = (signUpParams) => {
  AuthAdapter.signUp(signUpParams)
    .then( res => {
      //check for an error message
      if( res.errors ){
        this.setState({
          errors: res.errors
        })
      }else{
        localStorage.setItem('jwt', res.jwt)
        this.setState({
          auth:{
            isLoggedIn: true,
            user: res.username,
            user_id: res.user
          }
        })
      }
      //if error render login again
      //else set the jwt token and forward user to /giphs
    })
  }


  handleLogout(){
    localStorage.clear()
    this.setState({auth: {
        isLoggedIn:false,
        user: ''
        }})
      }

  render() {
    return (
      <Router>
      <div>
        <Helmet>
          <style>{'body { background-color: #F4EAD1; }'}</style>
        </Helmet>
        <FixedMenuLayout
            isLoggedIn={this.state.auth.isLoggedIn}
            onLogout={this.handleLogout.bind(this)}
            username={this.state.auth.user}
            user={this.state.auth.user_id}
        />

        <Route exact path='/' component={Home} />

        <Route path='/login'
          render={() => this.state.auth.isLoggedIn ?
            <Redirect to='/user/home'/> : <Login onLogin={this.onLogin}/>} />

        <Route path="/signup"
          render={()=> this.state.auth.isLoggedIn ?
            <Redirect to="/" /> : <UserSignup onSignUp={this.onSignup} errors={this.state.errors}/>} />

        <Route path="/logout"
          render={() => {
            this.handleLogout()
            return (<Redirect to="/"/>)
            }} />

        <Route path='/user/events/' auth={this.state.auth} component={UserEvent} />

        <Route path='/user' component={UserRouter} />
        <Route path='/events' component={EventsRouter} />
        <Route path='/search' component={SearchRouter} />
      </div>
      </Router>
    );
  }
}

export default App;
