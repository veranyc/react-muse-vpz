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
    //  encore1: nextProps.setlist[1],
    //  encore2: nextProps.setlist[2],
     setlistId: nextProps.id
     })

     this.mappedSongList()
   }

  //  componentWillReceiveProps = (nextProps, mappedSongList) => {
  //  this.setState({
  //    setlist: nextProps.setlist[0].song,
  //    encore1: nextProps.setlist[1]['@encore'],
  //    encore2: nextProps.setlist[2]['@encore'],
  //    setlistId: nextProps.id
  //    })
   //
  //    this.mappedSongList()
  //  }

   mappedSongList = () => (
     this.state.setlist.map((song, index) => (
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
           {/* {this.mappedSongList()} */}
         </ul>
       </div>
     );
   }
 }

 export default EventSongList


 // this.state.setlist[0].song.map((song, index) => (
 // //   <li>{song['@name']}</li>
 // // ))
