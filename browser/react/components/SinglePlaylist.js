import React from 'react';
import Songs from '../components/Songs';

class SinglePlaylist extends React.Component {

	componentDidMount () {
    	const selectPlaylist = this.props.selectPlaylist;
    	const playlistId = this.props.routeParams.playlistId;

    	selectPlaylist(playlistId);
  	}

  	componentWillReceiveProps(nextProps) {
	  	const nextPlaylistId = nextProps.routeParams.playlistId;
	    const currentPlaylistId = this.props.routeParams.playlistId;
	    const selectPlaylist = this.props.selectPlaylist;
	    if (nextPlaylistId !== currentPlaylistId)
	      selectPlaylist(nextPlaylistId);
  	}

	render() {
	    const playlist = this.props.selectedPlaylist;
		return (
			<div>
			  <h3>{ playlist.name }</h3>
			  <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
			  { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
			  <hr />
			</div>
		)	
	}
}

export default SinglePlaylist;