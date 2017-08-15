import React from 'react'
import { Table } from 'semantic-ui-react'


  class EventList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        setlistResults: this.props.setlistResults,
        selectedSetlist: {}
      };
    }

    componentWillReceiveProps = (nextProps, mappedSetlistItems) => {
    this.setState({
      setlistResults: nextProps.setlistResults
      })
      // debugger
      this.mappedSetlistItems()
    }

    // componentDidUpdate = () => {
    //   this.mappedSetlistItems()
    // }

    mappedSetlistItems = () => {
      return this.state.setlistResults.map((event, index) => {
        return (
          <Table.Row key={event.id}>
            <Table.Cell>{index}</Table.Cell>
            <Table.Cell>{event.eventdate}</Table.Cell>
            <Table.Cell>{event.venue.name}</Table.Cell>
            <Table.Cell>{event.tour}</Table.Cell>
          </Table.Row>
        )
      })
    }

    handleSelectedSetlist = (e) => {
      this.setState({selectedSetlist: e.target.value})
    }


    render() {
      return (
        <div>
          <p>Your results will appear below:</p>
          <Table celled selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Venue</Table.HeaderCell>
                  <Table.HeaderCell>Tour</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body onClick={this.handleSelectedSetlist}>
                {this.mappedSetlistItems()}
              </Table.Body>
          </Table>
        </div>
      );
    }
  }

export default EventList
