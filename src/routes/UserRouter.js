import React from 'react'
import { Route} from 'react-router-dom'
import UserHome from '../components/user/Home'
import UserProfile from '../components/user/Profile'
// import UserSignup from '../components/user/Signup'


const UserRouter = () => {
  return (
    <div>
      <Route path='/user/profile/:userID' component={UserProfile} />
      <Route exact path='/user/home' component={UserHome}/>
      {/* <Route exact path='/user/signup' component={UserSignup}/> */}
    </div>
  )
}

export default UserRouter
