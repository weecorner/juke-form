import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist';
import initialState from '../initialState';
import axios from 'axios';
import

export default class NewPlaylistContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formValue: '',
			buttonDisabled: true,
			alert: '',
			formDirty: false,
			showAlert: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event) {
		const value = event.target.value;
		this.setState({formValue: value});
		event.preventDefault();
		console.log('in the handleChange', this.state.formDirty, value.length);



		if(value.length === 0 && this.state.formDirty === true) {
			console.log('empty name');
			this.setState({alert: 'Please enter a name!', showAlert: true, buttonDisabled: true})
		}

		else if(value.length > 16) {
			console.log('name too long');
			this.setState({alert: 'Please enter a name shorter than 16 characters!', buttonDisabled: true, showAlert: true});
		}
		else {
			console.log('started typing', value.length);
			this.setState({formDirty: true, alert: '', showAlert: false, buttonDisabled: false})
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.formValue);
		const addPlaylist = this.props.addPlaylist;
		addPlaylist(this.state.formValue);

		const path = `/playlists/${this.state.formValue}`

		
	}
	render() {
		const formValue = this.state.formValue;
		return (
			<NewPlaylist handleChange={this.handleChange} handleSubmit={this.handleSubmit} formValue={this.state.formValue} buttonDisabled={this.state.buttonDisabled} alert={this.state.alert} showAlert={this.state.showAlert}/>
		)
	}

}

//this refers to the instance of playlist