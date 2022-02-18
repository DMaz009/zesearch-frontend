import React, { Component } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import StudyContainer from './StudyContainer'
import CategoryDropDown from './Nav'
import Create from './components/Create'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const baseUrl = "https://zesearch-backend.herokuapp.com"
// "http://localhost:3003"
class App extends Component {
  constructor() {
    super()
//add a method that is called after you fetch to the backend will call this method and add that studycard to the studyCard array.
    this.state = {
      studyCards: [],
      studies: [],
      studiesToBeEdited: {},
      title: "",
      category: "",
      link: "",
      summary: "",
      rating: 0,
      name: [
        {
          id: 0,
          category: 'Cellular',
          selected: false,
          key: 'name'
        },
        {
          id: 1,
          category: 'Genetics',
          selected: false,
          key: 'name'
        },
        {
          id: 2,
          category: 'Biochemistry',
          selected: false,
          key: 'name'
        },
        {
          id: 3,
          category: 'Endocriniology',
          selected: false,
          key: 'name'
        },
        {
          id: 4,
          category: 'Microbiology',
          selected: false,
          key: 'name'
        },
        {
          id: 5,
          category: 'Immunology',
          selected: false,
          key: 'name'
        },
        {
          id: 6,
          category: 'Cognitive',
          selected: false,
          key: 'name'
        },
        {
          id: 7,
          category: 'Gerontology',
          selected: false,
          key: 'name'
        },
        {
          id: 8,
          category: 'Nutrition',
          selected: false,
          key: 'name'
        }
      ]
    }

  }

  getStudies = () => {
    fetch(baseUrl + '/studies')
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        console.log(res.status)
      }
    }).then(data => {
      console.log(data)
      this.setState({studyCards: data})
    })
  }

  addStudy = (studyCard) => {

    const copyStudies = [...this.state.studyCards]
    copyStudies.push(studyCard)
    this.setState({
      studyCards: copyStudies
    })
  }

  addName = (name) => {
    this.setState({
      name: [name]
    })
  }

  deleteStudy = (id) => {
    console.log(id)
    fetch(baseUrl + '/studies/' + id, {
      method: 'DELETE',
      // credentials: 'include'
    }).then(res => {
      console.log(res)
      if(res.status === 200) {
        const findIndex = this.state.studyCards.findIndex(studyCard => studyCard._id === id)
        const copyStudies = [...this.state.studyCards]
        copyStudies.splice(findIndex, 1)
        this.setState({
          studyCards: copyStudies
        })
        this.getStudies()
      }
    })
  }

  updateStudyCards = (resJson) => {
    const copyStudy = [...this.state.studyCards]
    const findIndex = this.state.studyCards.findIndex(
      study => study._id === resJson.data._id)
      copyStudy[findIndex] = resJson.data
      console.log(copyStudy[findIndex])

      this.getStudies()
  }


  componentDidMount() {
    this.getStudies()
  }

  render(){
    return (
      <div className="App">
        {this.state.name.map((n) => {
          return
        })}
        <Navbar id="nav1" fixed= "top" bg="dark" expand='lg'>
          <CategoryDropDown title="Category" list={this.state.name}/>
          <Create title="Category" studyCards={this.state.studyCards} addStudy={this.addStudy} list={this.state.name} setname={this.addName}/>

        </Navbar>


        <StudyContainer baseUrl={baseUrl} addStudy={this.addStudy} studyCards={this.state.studyCards} deleteStudy={this.deleteStudy} updateStudyCards={this.updateStudyCards}/>

      </div>
    )
  }
}

export default App;
