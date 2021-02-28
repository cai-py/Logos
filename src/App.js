import React from 'react'
import './App.css';

// Components 
import ToDoList from './components/toDoList'

// FontAwsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)

class App extends React.Component {
  
  render() {
    let date = new Date();
    let month = date.getMonth();
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return (
      <div className="App">
        <div className="navBar">
          <h1 className="logo">Logos</h1>
        </div>
        <div className="main">
          <div className="leftSB white">
            <div className="calendar grey">
              <h3 className="date">{months[month]}</h3>
              <h2 className="time">{date.getDate()}</h2>
            </div>
            <div className="toDoList grey">
              <ToDoList/>
            </div>
          </div>
          <div className="notes white">
            <div className="grey textboxContainer">
              <textarea className='docTitle'></textarea>
              <textarea className='docText'></textarea>
            </div>
          </div>
          <div className="rightSB white">
            <div className="grey">Time Blocks</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
