import React from 'react'
import { Container, Header, Button, Form } from 'semantic-ui-react'
import { Redirect, NavLInk } from 'react-router-dom'

export default class Login extends React.Component{

  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onSendLogin(this.state)
    this.setState({username: '', password: ''})
  }


  render(){
     return(
       <div>
          <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>Login</Header>
            {/* //if logged in, redirect to user home otherwise show the login form and allow them to login */}
            {this.props.isLoggedIn() ? <Redirect to='/user/home'/> :
            <Form>
              <Form.Field>
                <label>Username</label>
                <input name='username' placeholder='' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input name='password' placeholder='' />
              </Form.Field>
              <Button type='submit' onSubmit={this.handleSubmit}>Submit</Button>
            </Form>
          }
          </Container>
       </div>

    )
   }
 }
