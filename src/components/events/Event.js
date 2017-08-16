import React from 'react'
import { Container, Header, Grid, Image, Button, Input} from 'semantic-ui-react'


export default class Event extends React.Component{

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
                </Container>
                <br></br>
                <br></br>
                <Container>
                  <h2>Pictures</h2>
                  <Image src='http://www.dystopiandanceparty.com/wp-content/uploads/2015/09/whitestripesmasonictemp.jpg' size='small' wrapped spaced/>
                  <Image src='http://www.concertlivewire.com/jpegs/concerts/stripes4.jpg' size='small' spaced/>
                  <form>
                    <div class="ui action input">
                      <label for="event_pic">Upload a picture</label>
                      <input type="file" id="event_pic" name="event_pic"
                            accept=".jpg, .jpeg, .png"/>
                      <button class="ui button">Submit</button>
                    </div>
                  </form>
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
