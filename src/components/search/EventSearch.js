import React from 'react'
import { Container, Header, Divider} from 'semantic-ui-react'
import EventList from '../events/EventList'

export default class EventSearch extends React.Component{
  constructor(){
    super()
    this.state = {
      setlistResults: [],
      selectedSetlist: null,
      artistName: "",
      cityName: "",
      userSearchURL: ""
    } //end state
  } //end constructor

  //API call when the form is submitted

  handleSubmit = (e) => {
    e.preventDefault()
    //append API url with name of artist and city name
    let searchURL = 'https://api.setlist.fm/rest/0.1/search/setlists?artistName=' + this.state.artistName + '&cityName=' + this.state.cityName
    this.setState({userSearchURL: searchURL})

    //make the API call
    fetch(searchURL, {
        method: 'GET',
        headers: {
          "x-api-key": "31fb9db3-0d0f-493c-8b73-8b824360134f",
          'Accept': 'application/json'
        }
      })//end fetch
      .then(response => response.json())
      .then(responseData => {
        this.setState({setlistResults: responseData.setlists.setlist})
      })
      .catch(error => {
        console.log('Error in fetching data', error)
        alert('There were no results found. Please try again.')
      })
    } //end handleSubmit


//Updating state for artist name based on form input
  handleChangeArtist = (e) => {
    this.setState({artistName: e.target.value})
  }

//Updating state for city name based on form input
  handleChangeCity = (e) => {
    this.setState({cityName: e.target.value})
  }


  render(){
     return(
       <div className="search-event-form">
         <Container text style={{ marginTop: '7em' }}>
           <Header as='h1'>Search for an Event</Header>
           <form onSubmit={this.handleSubmit}>
           <label>
              Artist Name:
              <input
                type="text"
                value={this.state.artistName}
                onChange={this.handleChangeArtist}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                value={this.state.cityName}
                onChange={this.handleChangeCity}
              />
            </label>
            <input
              type="submit"
              value="Search"
            />
          </form>
          <br></br>
          <br></br>
          <Divider />
          <EventList setlistResults={this.state.setlistResults}/>
         </Container>
       </div>
    )
   }
 }
