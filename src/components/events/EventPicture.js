 import React from 'react'
  import { Container, Button, Input, Image } from 'semantic-ui-react'

 class EventPicture extends React.Component {
   constructor(props) {
     super(props);
     this.state = {

     };
   }

   render() {
     return (
       <div>
         <Container>
           <h2>Pictures</h2>
           <p>Include your pictures by providing their URLs here:</p>
           <Input type='textarea' />
           <Button class="ui primary button">Add Picture</Button>
           <br></br>
           <br></br>
           <Image src='http://www.dystopiandanceparty.com/wp-content/uploads/2015/09/whitestripesmasonictemp.jpg' size='small' wrapped spaced/>
           <Image src='http://www.concertlivewire.com/jpegs/concerts/stripes4.jpg' size='small' spaced/>
           <br></br>
           <br></br>
           <form>
             {/* <div class="ui action input"> */}
               {/* <label for="event_pic">Upload Your Pictures</label> */}
               {/* <input type="file" id="event_pic" name="event_pic" */}
                     {/* accept=".jpg, .jpeg, .png" value="Upload Photo"/> */}
               {/* <br></br> */}
               {/* <Button class="ui button primary">Submit</Button> */}
             {/* </div> */}
           </form>
               <Button class="ui button primary">View Slideshow</Button>
         </Container>
       </div>
     );
   }
 }

 export default EventPicture
