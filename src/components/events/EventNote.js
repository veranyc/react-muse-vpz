 import React from 'react'
 import { Container, Button, Input, Form } from 'semantic-ui-react'

 class EventNote extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       eventId: "",
       note: "",
       noteSubmitted: false
     };
   }

   handleTextChange = (e) => {
     console.log('Someone is typing a note')
     this.setState({
       note: e.target.value
     })
   }

   handleSubmit = (e) => {
     console.log('Note submitted')
     this.setState({
       noteSubmitted: true
     })
     e.preventDefault()
     let notePatchUrl = 'http://localhost:3000/api/v1/events/' + this.props.event
     fetch(notePatchUrl, {
       method: 'PUT',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'},
       body: JSON.stringify( {
         notes: this.state.note,
         id: this.props.event
        //  slfm_setlist: this.props.setlistID,
        //  user_id: this.props.user_id
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
         console.log(res)
         this.setState({
           eventId: res.id,
         }) //end setState
       } //end else
     }) //end then
     } //end handleclick



   render() {
     return (
       <div>
         <Container>
           <h2>Notes</h2>
            {!this.state.noteSubmitted ?
           <Form onSubmit={this.handleSubmit}>
             <Form.Field>
               <input name='notes' placeholder='Type in some thoughts on the show here:' onChange={this.handleTextChange}/>
             </Form.Field>
             <Button fluid={true} size='small' type='submit' primary={false} >Add Note</Button>
           </Form> : null}
           {this.state.noteSubmitted ?
             <h4>{this.state.note}</h4> : null }
           {/* <Input type='textarea' />
           <Button class="ui primary button">Add Note</Button> */}
         </Container>
       </div>
     );
   }
 }

 export default EventNote
