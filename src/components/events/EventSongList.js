 import React from 'react'
 import EventSong from './EventSong'
 import { Table } from 'semantic-ui-react'

 class EventSongList extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       setlist: [],
       setlistId: ""
     };
   }

   componentWillReceiveProps = (nextProps, mappedSongList) => {
     this.state.setlist ?
       this.setState({
         setlist: nextProps.setlist[0].song,
         encore1: nextProps.setlist[1].song,
        //  encore2: nextProps.setlist[2].song,
         setlistId: nextProps.id
       })
       : null
   }



   render() {
     return (
       <div>
         <Table.Body>
           <Table.Row>
           {this.state.setlist.length > 0 ?
               this.state.setlist.map((song, index) => (
                   <EventSong
                     name={song['@name']}
                     key={index}
                   />
                 ))
               : <p>Sorry, we do not have songs for this event</p>
             }
           </Table.Row>
         </Table.Body>
       </div>
     );
   }
 }

 export default EventSongList
