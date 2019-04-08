import React, { Component } from 'react';
import Header from './Header';
// import Calendar from 'react-calendar'
// use if i know a better way to style the cal (this will import the cal with no css) import Calendar from 'react-calendar/dist/entry.nostyle';
import Card from './Card';
import './App.css';
import axios from "axios";


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="App-header">
          <Header />
        </div>
        <div className="App-calendar">
          <Card />
        </div>
      </div>
    );
  }
}

export default App;


// calendar for user to input watering schedule and check off when they are done watering for the day