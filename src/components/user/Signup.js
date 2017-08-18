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

  handleOnSubmit = (e) => {
    e.preventDefault()
    debugger
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    let userURL = 'https://morning-brushlands-34721.herokuapp.com/api/v1/users'

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
             <Form>
               <Form.Field>
                 <label>Username</label>
                 <input type="text" name="username" placeholder="Any username or email (e.g. beastieboys1 or bboys@nosleeptilbk.com)"/>
               </Form.Field>
               <Form.Field>
                 <label>Password</label>
                 <input type="text" name="password"/>
               </Form.Field>
               <Form.Field>
                 <label>Password Confirmation</label>
                 <input type="text" name="password_confirmation"/>
               </Form.Field>
               <Button type='submit' onSubmit={this.handleOnSubmit}>Sign Me Up!</Button>
             </Form>
         </Container>
       </div>

    )
   }
 }
