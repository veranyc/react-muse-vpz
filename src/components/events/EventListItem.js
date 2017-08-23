import React from 'react'
import { Table } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router-dom'


 class EventListItem extends React.Component {
   constructor(props) {
     super()
     this.state = {
       selectedSetlist: '',
       renderEvent: false
     }
   }

   handleOnSubmit = (e) => {
     console.log("The select button was clicked")
     // event route to be triggered, and pass this.props.id to it
     this.setState(({selectedSetlist: this.props.id}))
   }

   handleOnClick = (e) => {
     console.log("A setlist was selected from the list by clicking")
     this.setState(({selectedSetlist: this.props.id}))
   }

   // <NavLink to=`/events/${this.state.selectedSetlist}`>Select Event</NavLink>

   render() {
     return (
       <div>
         <Table.Row key={this.props.id} onClick={this.handleOnClick}>
           <Table.Cell>{this.props.date}</Table.Cell>
           <Table.Cell>{this.props.venue}</Table.Cell>
           <Table.Cell>{this.props.city}</Table.Cell>
         </Table.Row>
        {this.state.selectedSetlist ?
          <Route>
            <Redirect from='/events' to={`/events/${this.state.selectedSetlist}`}/>
          </Route>
        : null}

       </div>


     );
   }
 }

 export default EventListItem
