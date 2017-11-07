import React, { Component } from 'react';

class Form extends Component {

	constructor(props){
		super(props);

		this.state = {
			inputValue: ''
		}
	}

handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.task);
		this.props.createTask(this.state.inputValue);
		const state = this.state;
		state.inputValue = '';
		this.setState(state);
	}

handleInput = (e) => {
		const state = this.state;
		state.inputValue = e.target.value;
		this.setState(state)
		}

	render(){
		return(
			<form>
				<input name="inputValue" type="text" placeholder="new task" onChange={this.handleInput} value={this.state.inputValue}/><br></br>
				<button onClick={this.handleSubmit}> Create Task</button>
			</form>
			)
	}
}

export default Form;