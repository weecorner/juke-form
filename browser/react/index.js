import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';
import FilterableArtistsContainer from './containers/FilterableArtistsContainer';
import NewPlaylist from './components/NewPlaylist';
import NewPlaylistContainer from './containers/NewPlaylistContainer';
import SinglePlaylist from './components/SinglePlaylist';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer} foo={'foo'}>
      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/artists" component={FilterableArtistsContainer} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="/artists/:artistId/albums" component={Albums} />
        <Route path="/artists/:artistId/songs" component={Songs} />
      </Route>
      <Route path="/NewPlaylist" component={NewPlaylistContainer} />
      <Route path="/playlists/:playlistId" component={SinglePlaylist} />
      <IndexRedirect to='/albums' />
    </Route>
  </Router>,
  document.getElementById('app')
);

//we render NewPlaylist in the container, so we want to render NewPlaylistContainer in our route