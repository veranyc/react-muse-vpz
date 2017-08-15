import React from 'react'
import { Container, Header, Button, Form } from 'semantic-ui-react'

export default class Login extends React.Component{

  render(){
     return(
       <div>
          <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>Login</Header>
            <Form>
              <Form.Field>
                <label>Username</label>
                <input placeholder='' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='' />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Container>
       </div>

    )
   }
 }
