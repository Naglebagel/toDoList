 import React, { Component } from 'react';


class Edit extends Component {
	constructor(props){
		super(props);

		this.state = {
			inputValue: ''
		}
	}

	componentWillReceiveProps(nextProps){
		const state= this.state;
		state.inputValue = nextProps.editedItem;
		this.setState(state)
	}

	handleInput = (e) => {
		if(e.key === "Enter"){
			this.props.editTask(this.state.inputValue)
		} else {
			const state = this.state;
			state.inputValue = e.target.value;
			this.setState(state)
		}
	}


  render(){
  	const editClass = this.props.showEdit ? "Edit" : "Edit-Hidden";
    return (
    	<div className={editClass}>
	     <label>Edit Task</label>
	     <input type="text" placeholder={this.props.editedItem} value={this.state.inputValue} onChange={this.handleInput} onKeyPress={this.handleInput}/>
	     </div>
      )
  }
}

export default Edit;