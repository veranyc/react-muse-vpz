import React from 'react'
import { Container, Header, Form, Button} from 'semantic-ui-react'

export default class UserSignup extends React.Component{

  handleOnSubmit = (e) => {
    e.preventDefault()
    //fetch > POST request to api/v1/create
    //redirect user to their user home page
  }

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
               <Button type='submit'>Sign Me Up!</Button>
             </Form>
         </Container>
       </div>

    )
   }
 }
