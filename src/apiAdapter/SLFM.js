

export default const SLFM {
}

//GET request for artist setlists on EventSearch

// let searchURL = 'https://api.setlist.fm/rest/0.1/search/setlists?artistName=' + this.state.artistName + '&cityName=' + this.state.cityName
// fetch(searchURL, {
//     method: 'GET',
//     headers: {
//       "x-api-key": "31fb9db3-0d0f-493c-8b73-8b824360134f",
//       'Accept': 'application/json'
//     }
//   })//end fetch
//   .then(response => response.json())
//   .then(responseData => {
//     this.setState({setlistResults: responseData.setlists.setlist})
//   })
//   .catch(error => {
//     console.log('Error in fetching data', error)
//     alert('There were no results found. Please try again.')
//   })

//GET request for setlist based on SLFM setlist id on Event

let searchSetlistURL = "https://api.setlist.fm/rest/1.0/setlist" + this.props.id

fetch(searchSetlistURL, {
      method: 'GET',
   headers: {
     "x-api-key": "31fb9db3-0d0f-493c-8b73-8b824360134f",
     'Accept': 'application/json'
    }
  })//end fetch
  .then(response => response.json())
  .then(responseData => {
    this.setState({setlist: responseData})
  })
  .catch(error => {
    console.log('Error in fetching data', error)
    alert('There were no results found. Please try again.')
  })

})
