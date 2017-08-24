import React from 'react'
import { Container, Header, Grid, Image, Button, Input} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import EventSongList from './EventSongList'
import EventNote from './EventNote'
import EventPicture from './EventPicture'





class Event extends React.Component{
  static contextTypes = {
    router: PropTypes.object
  }
  constructor() {
    super();
    this.state = {
      setlist: null,
      setlistDate: "",
      setlistArtist: "",
      setlistId: "",
      setlistTour: "",
      setlistVenue: "",
      city: "",
      state: "",
      country: "",
      eventId: "",
      eventSaved: false
    };
    console.log("WE ARE INSIDE CONSTRUCTOR")
  }


  componentDidMount = () => {
    const idUrl = this.context.router.history.location.pathname
    const id = idUrl.split("/")[idUrl.split("/").length - 1]
    const setlistURL = "https://api.setlist.fm/rest/0.1/setlist/" + id + '.json'
    console.log("Compoent Did the Mounting",setlistURL)

    fetch(setlistURL, {
        method: 'GET',
        headers: {
          "x-api-key": "31fb9db3-0d0f-493c-8b73-8b824360134f",
          'Accept': 'application/json'
        }
      })//end fetch
      .then(response => response.json())
      .then((res)=> this.updatemystate(res))
      // .catch(error => {console.log('Error in fetching data')})
    }//end componentWillMount



updatemystate = (responseData) => {
  this.setState({
    setlist: responseData.setlist.sets.set,
    setlistId: responseData.setlist['@id'],
    setlistDate: responseData.setlist['@eventDate'],
    setlistArtist: responseData.setlist.artist['@name'],
    setlistTour: responseData.setlist['@tour'],
    setlistVenue: responseData.setlist.venue['@name'],
    city: responseData.setlist.venue.city['@name'],
    state: responseData.setlist.venue.city['@state'],
    country: responseData.setlist.venue.city.country['@name']
  })
  console.log("#####################JUST SET STATE IN EVENT.JS ##########################")
}

handleClick = (e) => {
      console.log("Save event button clicked")
      this.setState({
        eventSaved: true
      })
      const idUrl = this.context.router.history.location.pathname
      const setlist_id = idUrl.split("/")[idUrl.split("/").length - 1]
      console.log(setlist_id)
      console.log(this.props.user_id)
      fetch('http://localhost:3000/api/v1/events', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify( {
          user_id: this.props.user_id,
          slfm_setlist: setlist_id
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
            eventId: res.id,
          }) //end setState
          } //end else
        }) //end then
      } //end handleclick


  render(){
     return(
       <div background-color='yellow'>
         <Container style={{ marginTop: '8em' }}>
           <Header as='h1'>{this.state.setlistArtist}</Header>
           <div>
             <Grid fluid celled divided="vertically">
               <Grid.Column width={8}>
                 <h4>{this.state.setlistDate}</h4>
                 <h4>Venue:  {this.state.setlistVenue}</h4>
                 <h4>City:  {this.state.city}, {this.state.state}</h4>
                 <h4>Country: {this.state.country}</h4>
                 <h4>Songs:</h4>
                 <ul>
                  <EventSongList setlist={this.state.setlist} id={this.state.setlistId} />
               </ul>
                <h4>Tour:  {this.state.setlistTour}</h4>
               </Grid.Column>
               <Grid.Column width={8}>
                  {/* <Button floated="right" onClick={this.handleClick}>Save My Event</Button> */}
                  {!this.state.eventSaved ?
                  <Button fluid={true} loated="right" size='large' type='submit' onClick={this.handleClick} primary={false} color="yellow">Save My Event</Button>
                  : null}
                  <br></br>
                  <br></br>
                  {this.state.eventSaved ?
                    <EventNote user_id={this.props.user_id} event={this.state.eventId} setlistID={this.state.setlistId}/> : null}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {this.state.eventSaved ?
                    <EventPicture event={this.state.eventId} setlistID={this.state.setlistId}/> : null}
                  <br></br>
                  <br></br>
                  {this.state.eventSaved ?
                  <Container>
                    <h2>Coming Soon</h2>
                    <p>Attach related tweets to your event.</p>
                  </Container> : null}
                </Grid.Column>
             </Grid>
           </div>
         </Container>
       </div>
    )
   }
 }

export default Event



{/* <Container>
  <h2>Notes</h2>
  <p>This was the last home show ever for our hometown band. The energy of the crowd as matched with the energy coming off the stage.
  </p>
  <Button class="ui primary button">Edit</Button>
  <Button class="ui button">Remove</Button>
</Container> */}
