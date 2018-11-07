import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';
import DropDowns from './DropDowns';

const topNavHeaders = {
  'Buy': {
    subHeader:['Homes for sale'],
    list: [
      'Homes for sale',
      'Foreclosures',
      'For sale by owner',
      'Open houses',
      'New construction',
      'Coming soon',
      'Recent home sales',
      'All homes'
    ] 
  },
  'Rent': {
    subHeader: ['Search rentals'],
    list: [
      'Rental Buildings',
      'Apartments for rent',
      'Houses for rent',
      'All rental listings',
      'All rental buildings'
    ]
  },
  'Sell': {
    subHeader: [''],
    list: [

    ]
  },
  'Mortgages': {
    subHeader: [''],
    list: [

    ]
  },
  'Agent finder': {
    subHeader: [''],
    list: [

    ]
  },
  'More': {
    subHeader: [''],
    list: [

    ]
  },
};

const headerArr= Object.keys(topNavHeaders);
const dropdownList = Object.values(topNavHeaders);
export class TopNav extends React.Component {

  render() {
    return (
      <Navbar className="navbar-main" collapseOnSelect>
      <Navbar.Collapse>
        <Nav>
          {
            headerArr.map((header, i) => 
            <DropDowns header={header} key={i} />)
          }
          <Nav id="nav-top-main-right">
            <NavItem id="Nav-top-right1" href="#">List your rental</NavItem>
            <NavItem id="Nav-top-right2" href="#">Advertise</NavItem>
            <NavItem id="Nav-top-right3" href="#">Sign in</NavItem>
            <NavItem id="Nav-top-right3" href="#">Join</NavItem>
          </Nav>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    )
  }  
}

export default TopNav;