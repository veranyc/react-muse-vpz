 import React from 'react'
 import {Table} from 'semantic-ui-react'

 class EventSong extends React.Component {
   constructor(props) {
     super(props);
     this.state = {

     };
   }

   render() {
     return (
       <div>
        <Table.Cell>{this.props.name}</Table.Cell>
         {/* <li>{this.props.name}</li> */}
       </div>
     );
   }
 }

 export default EventSong
