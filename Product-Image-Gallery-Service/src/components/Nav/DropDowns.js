import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, DropdownButton } from 'react-bootstrap';

const headerArr = ["Buy", "Rent", "Sell", "Mortgages", "Agent finder", "More"];
const dropDownOptions = {
  'Buy': headerArr,
  'Rent': headerArr,
  'Sell': headerArr,
  'Mortgages': headerArr,
  'Agent finder': headerArr,
  'More': headerArr,
};

const DropDowns = ({header}) => {
  return (
  <NavDropdown className="Nav-top-bar-header" id="dropdowns-list" title={header}>
            <MenuItem><b>Zipcode Home For Rent</b></MenuItem>
            <MenuItem divider />
            <MenuItem>Rental Buildings</MenuItem>
            <MenuItem>Apartments for rent</MenuItem>
            <MenuItem>Houses for rent</MenuItem>
            <MenuItem>All Rental Listings</MenuItem>
            <MenuItem>All Rental Buildings</MenuItem>
  </NavDropdown>
  ) 
}

export default DropDowns;