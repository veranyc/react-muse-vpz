import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const FixedMenuLayout = () =>
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image
            size='mini'
            src='/logo.png'
            style={{ marginRight: '1.5em' }}
          />
          Vera's Final Project
        </Menu.Item>
        <Menu.Item as='a'><Link to="/">Home</Link></Menu.Item>
        <Menu.Item as='a'><Link to="/user/profile/1">Profile</Link></Menu.Item>
        <Menu.Item as='a'><Link to="/user/home">My Events</Link></Menu.Item>
        <Menu.Item as='a'><Link to="/search/event">Search for Event</Link></Menu.Item>
        <Menu.Item as='a'><Link to="/login">Login</Link></Menu.Item>
        <Menu.Item as='a'><Link to="/user/signup">Signup</Link></Menu.Item>
        {/* <Dropdown item simple text='Options'>
          <Dropdown.Menu color="teal">
            <Dropdown.Item inverted><Link to="/user/profile/1">Profile</Link></Dropdown.Item>
            <Dropdown.Item>Events</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Login</Dropdown.Item>
            <Dropdown.Item>Signup</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </Container>
    </Menu>
  </div>

export default FixedMenuLayout
