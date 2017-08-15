import React from 'react'
import { Container, Header} from 'semantic-ui-react'
const getArtistSearchUrl = 'https://api.setlist.fm/rest/0.1/search/artists?artistName=Arcade+Fire'

export default class ArtistSearch extends React.Component{
   constructor(){
     super()
     this.state = {
       artistResults: null,
       selectedArtist: null
     }
   }

   componentDidMount() {
   fetch(getArtistSearchUrl, {
       method: 'get',
       headers: {
         "x-api-key": "31fb9db3-0d0f-493c-8b73-8b824360134f",
         'Accept': 'application/json'
       }
   })
     .then(response => response.json())
     .then(responseData => {
       this.setState({artistResults: responseData.artists.artist})
     })
     .catch(error => {
       console.log('Error in fetching data', error)
     })
 }

  render(){
     console.log(this.state.artistResults)
     return(
       <div>
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Search for an Artist or Band</Header>
       </Container>
       </div>
    )
   }
 }
