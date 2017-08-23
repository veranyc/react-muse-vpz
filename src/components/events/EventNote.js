 import React from 'react'
 import { Container, Button, Input } from 'semantic-ui-react'

 class EventNote extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       eventId: ""
     };
   }

   render() {
     return (
       <div>
         <Container>
           <h2>Notes</h2>
           <p>Type in some thoughts on the show here:</p>
           <Input type='textarea' />
           <Button class="ui primary button">Save</Button>
         </Container>
       </div>
     );
   }
 }

 export default EventNote
