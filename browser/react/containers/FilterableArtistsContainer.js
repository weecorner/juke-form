import React, { Component } from 'react';
import axios from 'axios';

import initialState from '../initialState';
import AUDIO from '../audio';

import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const value = event.target.value;
		this.setState({inputValue: value});
	}
	
	render () {
		const inputValue = this.state.inputValue;
		const filteredArtists = this.props.artists.filter(artist => artist.name.toLowerCase().match(inputValue.toLowerCase()));
	  return (
	    <div>
	      <FilterInput handleChange={this.handleChange}/>
	      <Artists artists={filteredArtists} />
	    </div>
  )
}
}