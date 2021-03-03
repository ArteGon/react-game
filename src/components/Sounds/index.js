import React from 'react';
import { SoundFilled} from '@ant-design/icons';

class Sounds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume : 0.5,
      isVolumeSound : true,
    }
    // this.audio = new Audio('http://boobooka.com/wp-content/uploads/2017/07/odin-klik-myshki.mp3');
  }

  toggleTurnSound = () => {
    this.state.isVolumeSound ? this.turnOffSound() : this.turnOnSound()
  }

  turnOnSound = () => {
    this.setState({
      volume : 0.5,
      isVolumeSound : true 
    }, () => {
      this.handleVolume(this.state.volume);
    });
  };

  turnOffSound = () => {
    this.setState({
      volume : 0,
      isVolumeSound : false 
    }, () => {
      this.handleVolume(this.state.volume);
    });
  }

  handleVolume = (volumeValue) => {
    this.setState({ 
      volume : volumeValue
    });    
  };

  render() {
    const {volume} = this.state;
    return (
      <div>
        <p>Звуки в игре</p>
        <button 
          onClick = {this.toggleTurnSound}
        >
          <SoundFilled />
        </button>
        <input 
          id="sounds-setting"
          type="range" 
          value={Math.round(volume * 100)} 
          onChange={(event) => this.handleVolume(event.target.value / 100)}
        />
      </div>
    );
  }
}


export default Sounds;