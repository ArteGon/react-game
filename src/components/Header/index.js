import React from 'react';
import cl from 'classnames';
import '../../css/common.css';
import 'antd/dist/antd.css';
import './style.css';
import { FullscreenOutlined, FullscreenExitOutlined, SettingOutlined } from '@ant-design/icons';
import { Switch, Modal } from 'antd';
import Music from '../Music';
import Sounds from '../Sounds';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onFullScreen : false,
      isBlackTheme : false,
      setIsModalVisible : false
    };

    this.audio = new Audio('http://boobooka.com/wp-content/uploads/2017/07/odin-klik-myshki.mp3');
  };
  
  clickButton = () => {
    const soundWrap = document.getElementById('sounds-setting');
    this.audio.volume = soundWrap ? (soundWrap.value / 100) : 0.5;
    this.audio.play();
  };

  onSetFullScreen = async () => {
    this.clickButton();
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    };

    this.setState((state) => {
      return{
        onFullScreen : !state.onFullScreen,
      }
    });
  };

  showModal = () => {
    this.clickButton();
    this.setState({
      setIsModalVisible: true, 
    });
  };

  handleCancel = () => {
    this.clickButton();
    this.setState({
      setIsModalVisible: false, 
    });
  };

  render() {
    const {setIsModalVisible} = this.state;

    return (
      <header>
        <div className={cl('container')}>
          <div className = {cl('header-blocks-wrap')}>
            <div className = {cl('header-name-game')}>
              <p>Memory Game</p>
            </div>   
            <div className = {cl('header-game-options')}>
              <div className={cl('switch-blact-theme')}>
                <Switch 
                  onChange={this.props.setBlackTheme} 
                  onClick={this.clickButton}
                />
                <p>Черная тема</p>
              </div>
              <div className={cl('fullscreen')}>
                <button
                  className={cl('btn', 'fullscreen-button')}
                  onClick = {this.onSetFullScreen}
                >
                  {this.state.onFullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                </button>
              </div>
              <div className={cl('setting')}>
                <button
                  className={cl('btn', 'setting-button')}
                  onClick={this.showModal}
                >
                  <SettingOutlined />
                </button>
              </div>  
            </div>
            <Modal 
              title="Настроки аудио" 
              visible={setIsModalVisible} 
              onCancel={this.handleCancel}
              footer={null}
            >
              <Music />
              <Sounds />
            </Modal>
          </div>  
        </div>   
      </header> 
    )
  }
};

export default Header;