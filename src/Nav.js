import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Select from 'react-select';
import './nav.css';


export default class CategoryDropDown extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = (event) => {
    console.log(event.target.name);
  }


  render() {
    return (
      <Container id="category">
        <DropdownButton id="categoryDropDown" variant="light" id="dropdown-basic-button" title="Bio-Category">
          <Dropdown.Item onClick= { (event) => this.handleClick(event)} name="Biotechnology" key='1' href="#/action-1">Biotechnology</Dropdown.Item>
          <Dropdown.Item key='2' href="#/action-2" name="Biochemistry">Biochemistry</Dropdown.Item>
          <Dropdown.Item key='3' href="#/action-3">Genetics</Dropdown.Item>
          <Dropdown.Item key='4' href="#/action-3">Cellular</Dropdown.Item>
          <Dropdown.Item key='5' href="#/action-3">Genetics</Dropdown.Item>
          <Dropdown.Item key='6' href="#/action-3">Immunology</Dropdown.Item>
          <Dropdown.Item key='7' href="#/action-3">Nutrition</Dropdown.Item>
          <Dropdown.Item key='8' href="#/action-3">Cognitive</Dropdown.Item>
        </DropdownButton>
          <br/>

          <h1 id="logo">Zesearch</h1>

      </Container>
    )
  }
}
