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
                 <Table.Cell>06/05/2017</Table.Cell>
                 <Table.Cell>U2</Table.Cell>
                 <Table.Cell>Barclay's Center</Table.Cell>
                 <Table.Cell>Brooklyn, NY</Table.Cell>
               </Table.Row>
             </Table.Body>
           </Table>
         </Container>
       </div>
    )
   }
 }
