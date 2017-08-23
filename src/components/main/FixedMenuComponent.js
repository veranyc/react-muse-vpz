import React from 'react'
import { Container, Image, Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class FixedMenuLayout extends React.Component {

// const FixedMenuLayout = () =>
  render() {
    return (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image
              size='mini'
              src='https://s3.us-east-2.amazonaws.com/eventphotosvpz/flat-cycles-1299936_1280.png'
              style={{ marginRight: '1.5em' }}
            />
            Muse: Music Memories
          </Menu.Item>
          <Menu.Item as='a'><Link to="/">Home</Link></Menu.Item>

          {this.props.isLoggedIn ?
          <Menu.Item as='a'><Link to="/user/home">My Events</Link></Menu.Item>
          : null}

          {this.props.isLoggedIn ?
          <Menu.Item as='a'><Link to="/search/event">Search for New Event</Link></Menu.Item>
          : null}

          {!this.props.isLoggedIn ?
          <Menu.Item as='a'><Link to="/login">Login</Link></Menu.Item>
          : null}

          {this.props.isLoggedIn ?
          <Menu.Item as='a'><Link to="/logout">Logout</Link></Menu.Item>
          : null}

          {!this.props.isLoggedIn ?
          <Menu.Item as='a'><Link to="/signup">Signup</Link></Menu.Item>
          : null}

          {this.props.isLoggedIn && this.props.username ?
          <Menu.Item as='a'>Hello, {this.props.username}</Menu.Item>
          : null}

        </Container>
      </Menu>
    </div>
    )
  }
}
export default FixedMenuLayout
