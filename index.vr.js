import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  VrButton,
  View,
} from 'react-vr';
import VideoElement from './components/VideoElement';

export default class MovieTheater extends Component {
  
  render() {
    // Within the the return block change the Pano Component's asset to 'Movies.jpg'
    //  Within the the return block change the VideoElement Component's props to reflect where and what video you would like to see in your movies. 
    // The transform prop takes an array with 3 numbers placing your object in the x, y, z of your world for example transform={[0.6, -3.3, -19]}
    // The video prop takes a string that will change the video playing. You can choose from the videos inside of the static_assets (files ending in .mp4) folder.
    return (
      <View>
        <Pano source={asset('Movies.jpg')}/>
        {/* Add Props to the VideoElement like this: <VideoElement transform={[5.0, -0.3, -9]} video={'A_Movie_From_Static_Assets.mp4'} /> */}
        <VideoElement transform={[0.6, -3.3, -19]} video={'bit_awards_2017_opening.mp4'} />
      </View>
    );
  }
};

AppRegistry.registerComponent('MovieTheater', () => MovieTheater);

