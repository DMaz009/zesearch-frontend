import React, { Component } from 'react'
import Cards from './components/Cards'

const baseUrl = "https://zesearch-backend.herokuapp.com/"
// "http://localhost:3003"
export default class StudyContainer extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (e, title, summary, category, variable, rating, link, studyCardId) => {
    e.preventDefault()
    console.log(studyCardId);
    fetch(baseUrl + '/studies/' + studyCardId, {
      method: 'PUT',
      body: JSON.stringify({
        title: title,
        summary: summary,
        category: category,
        variable: variable,
        rating: rating,
        link: link,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      this.props.updateStudyCards(resJson)
    })
  }




  render (){
    return (
      <div>

        { this.props.studyCards.map((studyCard, i) => {
          return (
            <Cards key={studyCard._id}  addStudy={this.props.addStudy} title={this.props.title} studyCard={studyCard} deleteStudy={this.props.deleteStudy} handleSubmit={this.handleSubmit} />
          )
        })}

      </div>
    )
  }
}
