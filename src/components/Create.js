import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Select from 'react-select';
import './create.css';

const baseUrl = "http://localhost:3003"

function Create(props,{setname}) {
  console.log(props.studyCards);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    rating: 0,
    title: "",
    category: "",
    summary: "",
    link: "",
    variable: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event);
    // fetch here to the backend send formData in the body
    fetch(baseUrl + '/studies/', {
      headers: {"content-type": "application/json"},
      method: "POST",
      body: JSON.stringify(formData)
      // credentials: 'include'
    })
    .then(res => {
      console.log(res.status)
      if(res.status === 200) {
        return res.json()
      } else {
        return "Error"
      }
    }).then(data => {
      console.log(data);
      props.addStudy(data)
      // setFormData({ }) set this form to empty
    })
  }

  useEffect(() => {
    // console.log("This is setname", setname)
  }, [])

  return (
    <>
      <Button id="createcontainer" variant="secondary" onClick={() => setShow(true)}>
        Create a StudyCard
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            New Study
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input htmlFor="title" type="text" id="newTitle" name="title"
            onChange={ (event) => setFormData({...formData, title: event.target.value})}
            value={formData.title} />
            <br/>
            <label>Summary</label>
            <input type="text" id="newSummary" name="newSummary"
            onChange={ (event) => setFormData({...formData, summary: event.target.value})}
            value={formData.summary} />
            <br/>
            <label>Category</label>
            <input type="text" id="newCategory" name="newCategory"
            onChange={ (event) => setFormData({...formData, category: event.target.value})}
            value={formData.category} />
            <br/>
            <label>Variable</label>
            <input type="text" id="newVariable" name="newVariable"
            onChange={ (event) => setFormData({...formData, variable: event.target.value})}
            value={formData.variable} />
            <br/>
            <label>Rating(0-5)</label>
            <input type="number" id="newRating" name="newRating"
            onChange={ (event) => setFormData({...formData, rating: event.target.value})}
            value={formData.rating} />
            <br/>
            <label>Link</label>
            <input type="text" id="newLink" name="newLink"
            onChange={ (event) => setFormData({...formData, link: event.target.value})}
            value={formData.link} />
            <br/>
            <Button type="submit">Submit</Button>

          </form>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default Create
