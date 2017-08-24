 import React from 'react'
  import { Container, Button, Image, Form, TextArea } from 'semantic-ui-react'

 class EventPicture extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       pictureSaved: false,
       eventId: this.props.event,
       link: '',
       pictureId: null
     };
   }

   handleTextChange = (e) => {
     console.log('Someone is typing a link')
     this.setState({
       link: e.target.value
     })
   }

   handleSubmit = (e) => {
         console.log("Picture button clicked")
         this.setState({
           pictureSaved: true
         })
         fetch('http://localhost:3000/api/v1/pictures', {
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify( {
             event_id: this.state.eventId,
             link: this.state.link
           }) //end of body obj
         })//end of fetch
         .then(res => res.json())
         .then( res => {
           if( res.errors ){
              this.setState({
                errors: res.errors
              })
           } //end if
           else{
             console.log("This is the response" , res)
             this.setState({
               pictureId: res.id,
             }) //end setState
             } //end else
           }) //end then
         } //end handleclick

   render() {
     return (
       <div>
         <Container>
           <h2>Pictures</h2>
           {!this.state.pictureSaved ?
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <TextArea name='link' placeholder='Include your pictures by providing their URLs here' onChange={this.handleTextChange}/>
            </Form.Field>
            <Button fluid={true} size='small' type='submit' primary={false} color="yellow">Add Picture</Button>
          </Form> : null}
          {this.state.pictureSaved ?
            <Image src={this.state.link} size='small' wrapped spaced/>
            :  <Image src='https://s3.us-east-2.amazonaws.com/eventphotosvpz/MusicMontageLarge1920x1178.jpeg' size='small' wrapped spaced/>}
           <br></br>
           <br></br>
               <Button class="ui button primary">View Slideshow</Button>
         </Container>
       </div>
     );
   }
 }

 export default EventPicture
