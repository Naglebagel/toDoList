import React, { Component } from 'react';
import './App.css';
import Show from './Show.js';
import Form from './Form.js';

class App extends Component {

  constructor(){

    super();

    this.state = {
      toDo: []
    }
  }

createTask = (task) => {
  const state = this.state;
  state.toDo.push(task);
  this.setState(state);
}

removeTask = (task) => {
  const state = this.state;
  state.toDo.splice(task.target.id, 1);
  this.setState(state);
}


  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <p>When a task is complete click it to remove</p>
        <Show toDo={this.state.toDo} removeTask={this.removeTask}/>
        <h3>Create a New Task</h3>
        <Form createTask={this.createTask}/>
      </div>
    ) 
  }
}

export default App;
