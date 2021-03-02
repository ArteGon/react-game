import React from 'react';
import { SoundFilled} from '@ant-design/icons';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume : 0.5,
      isVolumeMusic : true
    }
    this.url = "https://ajoyib.net/uploads/files/02-2021/egor-krid-golos.mp3";
    this.audio = new Audio(this.url);
    this.audio.autoplay = true;
  }

  toggleTurnMusic = () => {
    this.state.isVolumeMusic ? this.turnOffMusic() : this.turnOnMusic()
  }

  turnOnMusic = () => {
    this.setState({
      volume : 0.5,
      isVolumeMusic : true 
    }, () => {
      this.handleVolume(this.state.volume);
    });
  };

  turnOffMusic = () => {
    this.setState({
      volume : 0,
      isVolumeMusic : false 
    }, () => {
      this.handleVolume(this.state.volume);
    });
  }

  handleVolume = (volumeValue) => {
    this.setState({ 
      volume : volumeValue
    }, () => {
      this.audio.volume = volumeValue;
    });    
  };

  render() {
    return (
      <div>
        <p>Музыка в игре</p>
        <button 
          onClick = {this.toggleTurnMusic}
        >
          <SoundFilled />
        </button>
        <input 
          type="range" 
          onChange={(event) => this.handleVolume(event.target.value / 100)}
          value={Math.round(this.state.volume * 100)} 
        />
      </div>
    );
  }
}


export default Music;