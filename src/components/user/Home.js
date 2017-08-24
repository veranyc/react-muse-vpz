import React from 'react'
import { Table, Container, Image, Button, Grid} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class UserHome extends React.Component{
   constructor(){
     super()
     this.state = {
       events: []
     }
   }


   componentDidMount() {
   fetch('http://api.setlist.fm/rest/0.1/search/setlists.json?artistName=lcd+soundsystem')
     .then(response => response.json())
     .then(responseData => {
       this.setState({events: responseData.setlists.setlist[0]})
     })
     .catch(error => {
       console.log('Error in fetching data', error)
     })
 }

  render(){
     console.log(this.state.events)
     return(
       <div>
         <Container text style={{ marginTop: '7em' }}>
           <Grid centered columns={2}>
             <Grid.Row>
             <Grid.Column>
                 <h1>Welcome Back to Your Music Memories</h1>
                 <p>Please click on the event you would like to view or click on the button to create a new one.</p>
                 <Button fluid={true} size='small' type='submit' primary={false} color="yellow"><Link color="white" to="/search/event">Create a New Memory</Link></Button>
               </Grid.Column>
               <Grid.Column textAlign="center">
                 <Image src="https://s3.us-east-2.amazonaws.com/eventphotosvpz/MixerBoard640x392.jpeg" size="huge" centered={true} size="huge" centered={true}/>
               </Grid.Column>
             </Grid.Row>
           </Grid>
                 <Table celled selectable>
             <Table.Header>
               <Table.Row>
                 <Table.HeaderCell>Date</Table.HeaderCell>
                 <Table.HeaderCell>Band</Table.HeaderCell>
                 <Table.HeaderCell>Venue</Table.HeaderCell>
                 <Table.HeaderCell>Location</Table.HeaderCell>
               </Table.Row>
             </Table.Header>
             <Table.Body>
               <Table.Row>
                 <Table.Cell>04/07/2017</Table.Cell>
                 <Table.Cell>LCD Soundsystem</Table.Cell>
                 <Table.Cell>Brooklyn Steel</Table.Cell>
                 <Table.Cell>Brooklyn</Table.Cell>
               </Table.Row>
               <Table.Row>
                 <Table.Cell>02/05/2015</Table.Cell>
                 <Table.Cell>Bjork</Table.Cell>
                 <Table.Cell>New York City Center</Table.Cell>
                 <Table.Cell>New York</Table.Cell>
               </Table.Row>
               <Table.Row>
                 <Table.Cell>06/27/2014</Table.Cell>
                 <Table.Cell>Beck</Table.Cell>
                 <Table.Cell>Sony Centre for Performing Arts</Table.Cell>
                 <Table.Cell>Toronto</Table.Cell>
               </Table.Row>
               <Table.Row>
                 <Table.Cell>10/04/2006</Table.Cell>
                 <Table.Cell>Beastie Boys</Table.Cell>
                 <Table.Cell>Hiro Ballroom</Table.Cell>
                 <Table.Cell>New York</Table.Cell>
               </Table.Row>
               <Table.Row>
                 <Table.Cell>02/05/2005</Table.Cell>
                 <Table.Cell>The White Stripes</Table.Cell>
                 <Table.Cell>Masonic Temple</Table.Cell>
                 <Table.Cell>Detroit</Table.Cell>
               </Table.Row>
             </Table.Body>
           </Table>
         </Container>
       </div>
    )
   }
 }
