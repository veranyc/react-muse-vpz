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
            key={event['@id']}
            venue={event.venue['@name']}
            tour={event['@tour']}
            event={event}
          />
          // <Table.Row key={event['@id']}>
          //   <Table.Cell>{event['@eventDate']}</Table.Cell>
          //   <Table.Cell>{event.venue['@name']}</Table.Cell>
          //   <Table.Cell>{event['@tour']}</Table.Cell>
          //   <Table.Cell><Button onClick={this.handleOnClick}>Select</Button></Table.Cell>
          // </Table.Row>
      })
    }

    // handleSelectedSetlist = (e) => {
    //   this.setState({selectedSetlist: e.target.value})
    // }


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
