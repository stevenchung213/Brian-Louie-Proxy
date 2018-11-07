import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';
import DropDowns from './DropDowns';
// import './Nav.css';

const headerArr = ["Buy", "Rent", "Sell", "Mortgages", "Agent finder", "More"];
const dropDownOptions = {
  'Buy': headerArr,
  'Rent': headerArr,
  'Sell': headerArr,
  'Mortgages': headerArr,
  'Agent finder': headerArr,
  'More': headerArr,
};

export class Navi extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  handleOpen() {
    this.setState({
      isOpen: true
    })
  }

  handleClose() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <Navbar className="navbar" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>  
              <img style={{width: 100, height: 100}} src="https://avatars3.githubusercontent.com/u/476233?s=200&v=4" href="#home"/>
              {/* <span style={{"textAlign": "center"}}>Zill-Woah!</span> */}   
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavDropdown className="dropdown"
            onMouseEnter = { this.handleOpen.bind(this) }
            onMouseLeave = { this.handleClose.bind(this) }
            open={ this.state.isOpen}
            id="nav-dropdown" 
            title="Buy"
          > 
              <MenuItem ><b>Zipcode Home For Sale</b></MenuItem>
              <MenuItem divider />
              <MenuItem>Homes for sale</MenuItem>
              <MenuItem>Foreclosures</MenuItem>
              <MenuItem>For sale by owner</MenuItem>
              <MenuItem>Open houses</MenuItem>        
          </NavDropdown>

          {headerArr.map(header => <DropDowns header={header}/>)}

          <Nav>
            <NavItem id="Nav-top-right1" href="#">List your rental</NavItem>
            <NavItem id="Nav-top-right2" href="#">Advertise</NavItem>
            <NavItem id="Nav-top-right3" href="#">Sign in</NavItem>
            <NavItem id="Nav-top-right4" href="#">Join</NavItem>

          </Nav>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }  
}

export default Navi;