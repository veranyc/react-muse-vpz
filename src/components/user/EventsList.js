import React from 'react'
import { Table, Container} from 'semantic-ui-react'


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
           <h1>My Events</h1>
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
