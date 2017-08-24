import React from 'react'
import { Container, Header, Image} from 'semantic-ui-react'
import Helmet from 'react-helmet'


const Home = () => {
      return(
        <div className='background-image'>

          <Container textAlign='right' text style={{ marginTop: '20em'}}>
                <h1 className='home-title'>Muse</h1>
                <br></br>
                <h4 className='home-subtitle'>Make your music memories last</h4>
                <br></br>
               <Image size='small' floated='right' src="https://s3.us-east-2.amazonaws.com/eventphotosvpz/flat-cycles-1299936_1280.png"/>
          </Container>
          </div>
     )
    }

export default Home
