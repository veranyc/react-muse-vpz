import React from 'react'
import { Container, Header, Form, Button} from 'semantic-ui-react'

export default class UserSignup extends React.Component{
  constructor(){
   super()

   this.state = {
     username: '',
     password: ''
   }
 }

  handleUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    console.log("signup button was clicked")
    e.preventDefault()
    debugger
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    let userURL = 'http://localhost:3001/api/v1/users'

    fetch(userURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user})
    })
    .then(response => response.json())
    .then(jsonObj => console.log(jsonObj))
  }

    //redirect user to their user home page


  render(){
     return(
       <div>
          <Container text style={{ marginTop: '7em' }}>
             <Header as='h1'>Signup</Header>
             <Form onSubmit={this.handleOnSubmit} >
               <Form.Field>
                 <label>Username</label>
                 <input
                    type="text"
                    name="username"
                    placeholder="Any username or email (e.g. beastieboys1 or bboys@nosleeptilbk.com)"
                    onChange={this.handleUsername}
                    value={this.state.username}
                  />
               </Form.Field>
               <Form.Field>
                 <label>Password</label>
                 <input
                    type="text"
                    name="password"
                    onChange={this.handlePassword}
                    value={this.state.password}
                  />
               </Form.Field>
               <Form.Field>
                 <label>Password Confirmation</label>
                 <input type="text" name="password_confirmation"/>
               </Form.Field>
               <Button type='submit'>Sign Me Up!</Button>
             </Form>
         </Container>
       </div>

    )
   }
 }
