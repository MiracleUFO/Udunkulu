import React from "react";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ArtistSignUp from "./components/ArtistSignUp";
import Browse from "./components/Browse";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Favorites from "./components/Favorites";
import AlbumsExtended from "./components/AlbumsExtended";
import ArtistsExtended from "./components/ArtistsExtended";
import Playlist from "./components/Playlist";
import ArtistsUpload from "./components/ArtistsUpload";
import Player from "./components/Player";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";

const selectPlayerDeets = (state) => state.playerDeets;

let App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  let playerDeets = useSelector(selectPlayerDeets);
  //console.log(playerDeets);
  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" component={Home} />
        <Route path="/browse" component={Browse} />
        <Route path="/albums" component={Albums} />
        <Route path="/artists" component={Artists} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/albums-simisola" component={AlbumsExtended} />
        <Route path="/artists-davido" component={ArtistsExtended} />
        <Route path="/playlist" component={Playlist} />
        <Route path="/upload" component={ArtistsUpload} />
      </Switch>
      {background && <Route exact path="/signup" children={<SignUp />} />}
      {background && <Route exact path="/signin" children={<SignIn />} />}
      {background && (<Route exact path="/artists-signup" children={<ArtistSignUp />} />)}
      {playerDeets.playing ? 
      <Player 
        x={playerDeets.x} src={playerDeets.src} title={playerDeets.title} artist={playerDeets.artist} 
        deetsList={playerDeets.deetsList} playing={playerDeets.playing} index={playerDeets.index}
        cover={playerDeets.cover} releaseDate={playerDeets.releaseDate} album={playerDeets.album}
      /> 
      : ''}
    </div>
  );
};

export default App;
