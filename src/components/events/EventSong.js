 import React from 'react'

 class EventSong extends React.Component {
   constructor(props) {
     super(props);
     this.state = {

     };
   }

   render() {
     return (
       <div>
         <li>{this.props.name}</li>
       </div>
     );
   }
 }

 export default EventSong
