import React from 'react'
import { Container, Header, Form, Button, Message, Grid, Image} from 'semantic-ui-react'

export default class UserSignup extends React.Component{
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
    console.log("signup button was clicked")
    e.preventDefault()
    console.log(this.state)
    console.log(this.props)
    this.props.onSignUp(this.state)
  }

    //redirect user to their user home page
    renderErrors = () => {
        return (
          this.props.errors.map((error) => {
            return (
              <Message negative><Message.Header><div className="center"> {error} </div></Message.Header></Message>
            )
          })
        )
      }

  render(){
      return(
        <div className="background">
          <Container text style={{ marginTop: '7em' }}>
            <h2>Sign Up for an Account</h2>
            <p>Register for an account on Muse and get started creating music memories.</p>
            <br></br>
            <Grid centered columns={2}>
              {/* <Grid.Row textAlign='left'>
                <h2>Sign Up</h2>
              </Grid.Row> */}
              <Grid.Row>
              <Grid.Column>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>Username</label>
                    <input name='username' placeholder='Username' onChange={this.handleUsername} value={this.state.username}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input type='password' name='password' placeholder='Password' onChange={this.handlePassword} value={this.state.password}/>
                  </Form.Field>
                    <Button fluid={true} size='large' type='submit' primary={false} color="yellow">Sign Up</Button>
                </Form>
                </Grid.Column>
                <Grid.Column textAlign="center">
                <Image src="https://s3.us-east-2.amazonaws.com/eventphotosvpz/MusicLife640x392.jpg" size="huge" centered={true}/>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column stretched={true}>
                  {this.props.errors.length ?
                  this.renderErrors()
                  :
                  null}
                  </Grid.Column>
                </Grid.Row>
            </Grid>
          </Container>
      </div>
    )
   }
 }




    //    <div>
    //       <Container text style={{ marginTop: '7em' }}>
    //          <Header as='h1'>Signup</Header>
    //          <Form onSubmit={this.handleOnSubmit} >
    //            <Form.Field>
    //              <label>Username</label>
    //              <input
    //                 type="text"
    //                 name="username"
    //                 placeholder="Any username or email (e.g. beastieboys1 or bboys@nosleeptilbk.com)"
    //                 onChange={this.handleUsername}
    //                 value={this.state.username}
    //               />
    //            </Form.Field>
    //            <Form.Field>
    //              <label>Password</label>
    //              <input
    //                 type="text"
    //                 name="password"
    //                 onChange={this.handlePassword}
    //                 value={this.state.password}
    //               />
    //            </Form.Field>
    //            <Form.Field>
    //              <label>Password Confirmation</label>
    //              <input type="text" name="password_confirmation"/>
    //            </Form.Field>
    //            <Button type='submit'>Sign Me Up!</Button>
    //          </Form>
    //      </Container>
    //    </div>
    //
