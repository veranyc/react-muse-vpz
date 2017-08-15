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





class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <FixedMenuLayout />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route path='/user' component={UserRouter} />
        <Route path='/events' component={EventsRouter} />
        <Route path='/search' component={SearchRouter} />
      </div>
      </Router>
    );
  }
}

export default App;
