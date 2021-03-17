import React from 'react'
import './App.css';

// Components 
import NavBar from './components/navBar'
import ToDoList from './components/toDoList'
import Calendar from './components/calendar'
import Notes from './components/notes'

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="page">
          <div className="leftSB white">
            <Calendar/>
            <ToDoList/>
          </div>
          <div className="mainContent white">
            <Notes/>
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
