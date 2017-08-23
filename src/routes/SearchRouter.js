import React from 'react'
import {Route} from 'react-router-dom'
// import ArtistSearch from '../components/search/ArtistSearch'
import EventSearch from '../components/search/EventSearch'


const SearchRouter = () => {
  return (
    <div>
      {/* <Route exact path='/search/artist' component={ArtistSearch} /> */}
      <Route exact path='/search/event' component={EventSearch}/>
    </div>
  )
}

export default SearchRouter
