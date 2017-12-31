import React from 'react';
import { ButtonToolbar, Button, Navbar } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <img src={require('../assets/images/logo.png')} />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text pullRight>
            <a href="#"><img src={require('../assets/images/remove.png')} className="removeimg" />
              <span className="cancel">Cancel</span></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;