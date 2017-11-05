import React, { Component } from 'react';


class Show extends Component {
	render(){
		const tasks = this.props.toDo.map((item, i) =>{
			return <div key={i}>
			<li id={i} onClick={this.props.removeTask}>{item}</li>
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