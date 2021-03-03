import React from 'react';
import { SoundFilled} from '@ant-design/icons';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume : 0.5,
      isVolumeMusic : true,
    }
    this.audio = new Audio(require(`./egor-krig-golosy.mp3`).default);
    console.log(this.audio);
    this.audio.autoplay = true;
    this.audio.loop = true;
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
    const {volume} = this.state;
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
          value={Math.round(volume * 100)} 
          onChange={(event) => this.handleVolume(event.target.value / 100)}
        />
      </div>
    );
  }
}


export default Music;