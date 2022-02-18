import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './studyCard.css';

const baseUrl = "https://zesearch-backend.herokuapp.com/"
// "http://localhost:3003"
export default class Cards extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.studyCard.title,
      category: props.studyCard.category,
      link: props.studyCard.link,
      summary: props.studyCard.summary,
      modalOpen: false,
      rating: props.studyCard.rating
    }

  }

  showEditForm = () => {
    this.setState({
      modalOpen: true,
    })
  }

  handleChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }


  render (){
    return (
    <div>
      <Container id="container" xs="auto" fluid="sm" fixed="bottom" >
        <Card id="slider" fixed="bottom" style={{ width: '18rem'}}>
          <Card.Body>
            <Card.Title>{this.props.studyCard.title}</Card.Title>
            <Card.Text>
              Summary: {this.props.studyCard.summary}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Category: {this.props.studyCard.category}</ListGroupItem>
            <ListGroupItem>Variable: {this.props.studyCard.variable}</ListGroupItem>
            <ListGroupItem>Rating(0-5): {this.props.studyCard.rating}</ListGroupItem>
          </ListGroup>
          <Card.Body>

            <Card.Link onClick={() => this.showEditForm()} href="#">Edit</Card.Link>
            <Card.Link onClick={() => this.props.deleteStudy(this.props.studyCard._id)}  href="#">Delete</Card.Link>
          </Card.Body>
        </Card>
        <br/>
      </Container>
      <Modal
        show={this.state.modalOpen}
        onHide={() => this.setState({modalOpen: false})}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            New Study
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={ (event) => this.props.handleSubmit(event, this.state.title, this.state.summary, this.state.category, this.state.variable, this.state.rating, this.state.link, this.props.studyCard._id)}>
            <label>Title</label>
            <input htmlFor="title" type="text" id="newTitle" name="title"
            onChange={ (event) => this.handleChange(event)}
            value={this.state.title} />
            <br/>

            <label>Summary</label>
            <input htmlFor="summary" type="text" id="newSummary" name="summary"
            onChange={ (event) => this.handleChange(event)}
            value={this.state.summary} />
            <br/>

            <label>Category</label>
            <input type="text" id="newCategory" name="category"
            onChange={ (event) => this.handleChange(event)}
            value={this.state.category} />
            <br/>

            <label>Variable</label>
            <input type="text" id="newVariable" name="variable"
            onChange={ (event) => this.handleChange(event)}
            value={this.state.variable} />
            <br/>

            <label>Rating(0-5)</label>
            <input type="number" id="newRating" name="rating"
            onChange={ (event) => this.handleChange(event)}
            value={this.state.rating} />
            <br/>
            <label>Link</label>
            <input type="text" id="newLink" name="link"
            onChange={ (event) => this.handleChange(event)}
            value={this.state.link} />
            <br/>
            <Button type="submit">Submit</Button>

          </form>
        </Modal.Body>

      </Modal>

    </div>


    )
  }
}
