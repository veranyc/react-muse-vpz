import React from 'react'
import { Container, Header, Grid, Image, Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import EventSongList from './EventSongList'




class Event extends React.Component{
  static contextTypes = {
    router: PropTypes.object
  }
  constructor() {
    super();
    this.state = {
      setlist: null,
      setlistData: null,
      setlistDate: "",
      setlistArtist: "",
      setlistId: "",
      setlistTour: "",
      setlistVenue: "",
      city: "",
      state: "",
      country: ""
    };
  }


  componentDidMount = () => {
    const idUrl = this.context.router.history.location.pathname
    const id = idUrl.split("/")[idUrl.split("/").length - 1]
    const setlistURL = "https://api.setlist.fm/rest/0.1/setlist/" + id + '.json'
    console.log(setlistURL)

    fetch(setlistURL, {
        method: 'GET',
        headers: {
          "x-api-key": "31fb9db3-0d0f-493c-8b73-8b824360134f",
          'Accept': 'application/json'
        }
      })//end fetch
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          setlistData: responseData.setlist,
          setlist: responseData.setlist.sets.set,
          setlistId: id,
          setlistDate: responseData.setlist['@eventDate'],
          setlistArtist: responseData.setlist.artist['@name'],
          setlistTour: responseData.setlist['@tour'],
          setlistVenue: responseData.setlist.venue['@name'],
          city: responseData.setlist.venue.city['@name'],
          state: responseData.setlist.venue.city['@state'],
          country: responseData.setlist.venue.city.country['@name']
        })
      })
      .catch(error => {
        console.log('Error in fetching data')
      })
    }//end componentWillMount


  render(){
     return(
       <div>
         <Container text style={{ marginTop: '8em' }}>
           <Header as='h1'>{this.state.setlistArtist}</Header>
           <Grid celled divided="vertically">
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
                <Button>Save My Event</Button>
                <Container>
                  <h2>Notes</h2>
                  <p>This was the last home show ever for our hometown band. The energy of the crowd as matched with the energy coming off the stage.
                  </p>
                  <Button class="ui primary button">Edit</Button>
                  <Button class="ui button">Remove</Button>
                </Container>
                <br></br>
                <br></br>
                <Container>
                  <h2>Pictures</h2>
                  <Image src='http://www.dystopiandanceparty.com/wp-content/uploads/2015/09/whitestripesmasonictemp.jpg' size='small' wrapped spaced/>
                  <Image src='http://www.concertlivewire.com/jpegs/concerts/stripes4.jpg' size='small' spaced/>
                  <br></br>
                  <br></br>
                  <form>
                    <div class="ui action input">
                      <label for="event_pic">Upload Your Pictures</label>
                      <input type="file" id="event_pic" name="event_pic"
                            accept=".jpg, .jpeg, .png" value="Upload Photo"/>
                      <br></br>
                      <Button class="ui button primary">Submit</Button>
                    </div>
                  </form>
                      <Button class="ui button primary">View Slideshow</Button>
                </Container>
                <br></br>
                <br></br>
                <Container>
                  <h2>Coming Soon</h2>
                  <p>Attach related tweets to your event.</p>
                </Container>
              </Grid.Column>
           </Grid>
         </Container>
       </div>
    )
   }
 }

export default Event

// {this.state.selectedSetlist ?
// <Route>
//   <Redirect from='/events' to={`/events/${this.state.selectedSetlist}`}/>
// </Route> : null}
