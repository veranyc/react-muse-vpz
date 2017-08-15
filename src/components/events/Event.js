import React from 'react'
import { Container, Header, Grid, Image } from 'semantic-ui-react'


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
                  <Image src='./stripesmeg.jpg' size='small' wrapped/>
                </Container>
              </Grid.Column>
           </Grid>
         </Container>
       </div>
    )
   }
 }
