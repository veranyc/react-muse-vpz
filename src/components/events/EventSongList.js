 import React from 'react'
 import EventSong from './EventSong'

 class EventSongList extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       setlist: {},
       setlistId: ""
     };
   }

   componentWillReceiveProps = (nextProps, mappedSongList) => {
   this.setState({
     setlist: nextProps.setlist,
     setlistId: nextProps.id
     })

     this.mappedSongList()
   }


   mappedSongList = () => (
     this.state.setlist[0].map((song, index) => (
       <EventSong
         name={song['@name']}
         key={index}
       />
     ))
   )

   render() {
     return (
       <div>
         <p>This is the event song list</p>
         <ul>

         </ul>
       </div>
     );
   }
 }

 export default EventSongList


 // this.state.setlist[0].song.map((song, index) => (
 // //   <li>{song['@name']}</li>
 // // ))
