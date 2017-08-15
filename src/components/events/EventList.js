import React from 'react'


  class EventList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        setlistResults: this.props.setlistResults,
        selectedSetlist: ""
      };
    }

    // mappedSetlistItems = () => {
    //   this.state.setlistResults.map((event, index) => {
    //     return (
    //       <li key={index}>{event.artist}
    //     )
    //   })
    // }

    render() {
      return (
        <div>

        </div>
      );
    }
  }

  export default EventList
