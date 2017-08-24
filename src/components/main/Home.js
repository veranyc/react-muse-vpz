import React from 'react'
// import { Container, Header, Image} from 'semantic-ui-react'
import Helmet from 'react-helmet'


const Home = () => {
      return(
        <div>
          <Helmet>
            <style>{'body {background-color: #F4EAD1; }'}</style>
            <style>{'body {background-image: url("https://s3.us-east-2.amazonaws.com/eventphotosvpz/MusicMontageLarge1920x1178.jpeg"); }'}</style>
            <style>{'body {height: 1178px;}'}</style>
            <style>{'body {background-attachment: fixed;}'}</style>
            <style>{'body {background-position: center;}'}</style>
            <style>{'body {background-repeat: no-repeat;}'}</style>
            <style>{'body {background-size: cover;}'}</style>
            <style>{'body {color: #F4EAD1;}'}</style>
            <style>{'body {text-shadow: 3px 2px black;}'}</style>
          </Helmet>
          {/* <Image src='https://s3.us-east-2.amazonaws.com/eventphotosvpz/MusicMontageLarge1920x1178.jpeg'/> */}
          {/* <Container textAlign='right' text style={{ marginTop: '20em', marginLeft: '12em' }}>
               <Header as='h1' inverted color='white' size='huge'>Welcome to Muse</Header>
               <Image size='medium' src="https://s3.us-east-2.amazonaws.com/eventphotosvpz/flat-cycles-1299936_1280.png"/>

          </Container> */}
        </div>
     )
    }

export default Home
