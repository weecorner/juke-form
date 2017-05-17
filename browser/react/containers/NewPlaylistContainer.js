import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist';
import initialState from '../initialState';

export default class NewPlaylistContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formValue: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event) {
		event.preventDefault();
		const value = event.target.value;
		this.setState({formValue: value})
		console.log('in the handleChange');
	}
	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.formValue);
	}
	render() {
		const formValue = this.state.formValue;
		return (
			<NewPlaylist handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
		)
	}

}

//this refers to the instance of playlist