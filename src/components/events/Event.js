import React from 'react'
import { Container, Header, Grid, Image, Button} from 'semantic-ui-react'
// const searchSetlistURL = "https://api.setlist.fm/rest/1.0/setlist" + this.props.id


class Event extends React.Component{

  componentDidMount = () => {

  }

  render(){
     return(
       <div>
         <Container text style={{ marginTop: '7em' }}>
           <Header as='h1'>The White Stripes</Header>
           <Grid celled divided="vertically">
             <Grid.Column width={8}>
               <h4>February 2, 2005</h4>
               <h4>Venue:  Masonic Temple Theatre</h4>
               <h4>Tour:  Get Behind Me Satan</h4>
               <ul>
                 Songs:
                 <li>Dead Leaves and the Dirty Ground</li>
                 <li>Blue Orchid</li>
                 <li>Hotel Yorba</li>
                 <li>The Denial Twist</li>
                 <li>Apple Blossom</li>
                 <li>I Think I Smell a Rat</li>
                 <li>Passive Manipulation</li>
                 <li>Harrigan</li>
                 <li>Cannon</li>
                 <li>John the Revelator</li>
             </ul>
             </Grid.Column>
             <Grid.Column width={8}>
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
