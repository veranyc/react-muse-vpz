import React from 'react'
import { Container, Header, Button, Form } from 'semantic-ui-react'


class Login extends React.Component{
  constructor(props) {
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

  handleSubmit = (e) => {
    console.log('onSubmit triggered')
    console.log(this.props)
    e.preventDefault()
    this.props.onLogin(this.state)
  }


  render() {
     return(
       <div>
          <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>Login</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Username</label>
                <input name='username' placeholder='' onChange={this.handleUsername}/>
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type='password' name='password' placeholder='' onChange={this.handlePassword}/>
              </Form.Field>
              <Button type='submit'>Login</Button>
            </Form>
          </Container>
       </div>

    )
   }
 }

export default Login
