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
            {/* <i class="user circle outline" ></i> */}
            <Image
              size='mini'
              src='https://s3.us-east-2.amazonaws.com/eventphotosvpz/flat-cycles-1299936_1280.png'
              style={{ marginRight: '1.5em' }}
            />
            Vera's Final Project
          </Menu.Item>
          <Menu.Item as='a'><Link to="/">Home</Link></Menu.Item>
          <Menu.Item as='a'><Link to="/user/home">My Events</Link></Menu.Item>
          <Menu.Item as='a'><Link to="/search/event">Search for New Event</Link></Menu.Item>
          <Menu.Item as='a'><Link to="/login">Login</Link></Menu.Item>
          {/* <Menu.Item onClick={this.props.handleLogout()} as='a'><Link to="/">Logout</Link></Menu.Item> */}
          <Menu.Item as='a'><Link to="/user/signup">Signup</Link></Menu.Item>
        </Container>
      </Menu>
    </div>
    )
  }
}
export default FixedMenuLayout
