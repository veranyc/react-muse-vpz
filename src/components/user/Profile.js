import React from 'react'
import { Container, Header} from 'semantic-ui-react'

 export default class UserProfile extends React.Component{

   render(){
      return(
        <div>
          <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>User Profile</Header>
          </Container>
        </div>

     )
    }
  }
