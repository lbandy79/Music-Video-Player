import React from 'react';
import './App.css';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  one: 'https://res.cloudinary.com/dlvg2ko9m/video/upload/v1533671454/obsession.mp4',
  two: 'https://res.cloudinary.com/dlvg2ko9m/video/upload/v1533672772/White%20Knuckles.mp4',
  three: 'https://res.cloudinary.com/dlvg2ko9m/video/upload/v1533674391/The_One_Moment.mp4',
  four: 'https://res.cloudinary.com/dlvg2ko9m/video/upload/v1533674388/The_Writing_s_On_the_Wall.mp4',
  five: 'https://res.cloudinary.com/dlvg2ko9m/video/upload/v1533674387/Upside_Down_Inside_Out.mp4',
  six: 'https://res.cloudinary.com/dlvg2ko9m/video/upload/v1533674386/I_Won_t_Let_You_Down.mp4',
  seven: 'https://res.cloudinary.com/dlvg2ko9m/video/upload/v1533674374/Here_It_Goes_Again.mp4',
  eight: 'https://res.cloudinary.com/dlvg2ko9m/video/upload/v1533674340/This_Too_Shall_Pass.mp4',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chooseVideo = this.chooseVideo.bind(this);
    this.state = { src: VIDEOS.one };
  }

  chooseVideo (newVideo) {
    this.setState({
      src: VIDEOS[newVideo]
    });
  }

  render() {
    return (
      <div>
        <h1>OK Go Music Video Player</h1>
        <Menu chooseVideo = { this.chooseVideo } />
        <Video src= { this.state.src } />
      </div>
    );
  }
}

export default App;
