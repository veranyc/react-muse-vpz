import React from 'react'
import { Container, Button, Form, Image, Grid } from 'semantic-ui-react'


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
            <h2>Login</h2>
            <p>Welcome back. Please login to access your music memories and to start new ones.</p>
            <br></br>
            <Grid centered columns={2}>
              <Grid.Row>
              <Grid.Column>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>Username</label>
                    <input name='username' placeholder='' onChange={this.handleUsername}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input type='password' name='password' placeholder='' onChange={this.handlePassword}/>
                  </Form.Field>
                  <Button fluid={true} size='large' type='submit' primary={false} color="yellow">Login</Button>
                </Form>
              </Grid.Column>
              <Grid.Column textAlign="center">
              <Image src="https://s3.us-east-2.amazonaws.com/eventphotosvpz/MashallSpeaker640x392.jpeg" size="huge" centered={true}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container>
       </div>

    )
   }
 }

export default Login
