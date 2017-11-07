import React, { Component } from 'react';
import './App.css';
import Show from './Show.js';
import Form from './Form.js';
import Edit from './edit.js'

class App extends Component {

  constructor(){

    super();

    this.state = {
      toDo: [],
      showEdit: false,
      editedItem: ''
    }
  }

createTask = (task) => {
  const state = this.state;
  state.toDo.push(task);
  this.setState(state);
}

removeTask = (task) => {
  const state = this.state;
  const index = state.toDo.indexOf(task)
  state.toDo.splice(index, 1);
  this.setState(state);
}

showEdit = (editedItem) => {
  const state = this.state;
  state.showEdit = !state.showEdit;
  state.editedItem = editedItem;
  this.setState(state)
  console.log(this.state, 'this is state in apps', editedItem)
}

editTask = (task) => {
  const index = this.state.toDo.indexOf(this.state.editedItem)
  const state = this.state;
  state.toDo[index] = task;
  state.showEdit = !this.state.showEdit;
  this.setState(state)
}


  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <Show toDo={this.state.toDo} showEdit={this.showEdit} removeTask={this.removeTask}/>
        {this.state.showEdit ? <Edit showEdit={this.state.showEdit} editTask={this.editTask} editedItem={this.state.editedItem}/> : null}
        <h3>Create a New Task</h3>
        <Form createTask={this.createTask}/>
      </div>
    ) 
  }
}

export default App;
