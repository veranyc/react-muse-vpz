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
    console.log('onSubmit triggered')
    e.preventDefault()
    this.props.onSendLogin(this.state)
    this.setState({username: '', password: ''})
  }


  render(){
     return(
       <div>
          <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>Login</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Username</label>
                <input name='username' placeholder='' onChange={this.handleChange}/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type='password' name='password' placeholder='' onChange={this.handleChange}/>
              </Form.Field>
              <Button type='submit'>Login</Button>
            </Form>
          }
          </Container>
       </div>

    )
   }
 }
