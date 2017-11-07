import React, { Component } from 'react';


class Show extends Component {

	removeTask = (e) => {
		this.props.removeTask(e.currentTarget.value)
	}

	render(){

		const tasks = this.props.toDo.map((item, i) =>{
			return <div key={i}>
			<li >{item}</li>
			<button onClick={this.removeTask}>Remove Task</button>
			</div>
		})


		return(
			<div className="taskList">
				<ul>
				{tasks}
				</ul>
			</div>
			)
	}
}

export default Show;