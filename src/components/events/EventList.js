import React from 'react'
import { Table } from 'semantic-ui-react'
import EventListItem from './EventListItem'


  class EventList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        setlistResults: this.props.setlistResults,
        // selectedSetlist: ''
      };
    }

    componentWillReceiveProps = (nextProps, mappedSetlistItems) => {
    this.setState({
      setlistResults: nextProps.setlistResults
      })

      this.mappedSetlistItems()
    }

    // handleOnClick = (e) => {
    //   this.setState(({selectedSetlist: e.target.value}))
    // }

    mappedSetlistItems = () => (
      this.state.setlistResults.map((event, index) => (
        <EventListItem
          id={event['@id']}
          venue={event.venue['@name']}
          tour={event['@tour']}
          date={event['@eventDate']}
          city={event.venue.city['@name']}
        />
      ))
    )

    render() {
      // console.log(this.state.selectedSetlist)
      return (
        <div>
          <p>Your results will appear below. Please click on the concert you attended to start your memory page.</p>
          <Table selectable>
              <Table.Header fullWidth>
                <Table.Row textAlign="left">
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Venue</Table.HeaderCell>
                  <Table.HeaderCell>City</Table.HeaderCell>
                </Table.Row>
                <Table.Row></Table.Row>
              </Table.Header>
              <Table.Body >
                {this.mappedSetlistItems()}
              </Table.Body>
          </Table>
        </div>
      );
    }
  }

export default EventList
