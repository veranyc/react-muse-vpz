import React from 'react'
import { Table, Button } from 'semantic-ui-react'


 class EventListItem extends React.Component {
   constructor(props) {
     super()
    //  this.state = {
    //    selectedSetlist: ''
    //  }
   }

   handleOnSubmit = (e) => {
     console.log("The select button was clicked")
     // event route to be triggered, and pass this.props.id to it
     this.setState(({selectedSetlist: this.props.id}))
   }

   render() {
     return (
       <div>
         <Table.Row key={this.props.id}>
           <Table.Cell>{this.props.date}</Table.Cell>
           <Table.Cell>{this.props.venue}</Table.Cell>
           <Table.Cell>{this.props.tour}</Table.Cell>
           <Table.Cell><Button onSubmit={this.handleOnSubmit}>Select</Button></Table.Cell>
         </Table.Row>
       </div>
     );
   }
 }

 export default EventListItem
