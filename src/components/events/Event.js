import React from 'react'
import { Container, Header} from 'semantic-ui-react'

export default class Event extends React.Component{

  render(){
     return(
       <div>
         <Container text style={{ marginTop: '7em' }}>
           <Header as='h1'>Event Page</Header>
         </Container>
       </div>
    )
   }
 }
