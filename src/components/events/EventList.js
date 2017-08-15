import React from 'react'
import { Table, Button } from 'semantic-ui-react'
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

    mappedSetlistItems = () => {
      return this.state.setlistResults.map((event, index) => {
        return <EventListItem
            id={event['@id']}
            venue={event.venue['@name']}
            tour={event['@tour']}
            date={event['@eventDate']}
          />
      })
    }

    render() {
      console.log(this.state.selectedSetlist)
      return (
        <div>
          <p>Your results will appear below:</p>
          <Table celled selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Venue</Table.HeaderCell>
                  <Table.HeaderCell>Tour</Table.HeaderCell>
                  <Table.HeaderCell> </Table.HeaderCell>
                </Table.Row>
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
