import React from 'react'
import { Table, Button } from 'semantic-ui-react'


 class EventListItem extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       selectedSetlist: ''
     };
   }

   handleOnClick = (e) => {
     this.setState(({selectedSetlist: this.props.key}))
   }

   render() {
     return (
       <div>
         <Table.Row key={this.props.key}>
           <Table.Cell>{this.props.event}</Table.Cell>
           <Table.Cell>{this.props.venue}</Table.Cell>
           <Table.Cell>{this.props.tour}</Table.Cell>
           <Table.Cell><Button onClick={this.handleOnClick}>Select</Button></Table.Cell>
         </Table.Row>
       </div>
     );
   }
 }

 export default EventListItem
