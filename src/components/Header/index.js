import React from 'react';
import cl from 'classnames';
import '../../css/common.css';
import 'antd/dist/antd.css';
import './style.css';
import { FullscreenOutlined, FullscreenExitOutlined, SettingOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import Music from '../Music';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onFullScreen : false,
      isBlackTheme : false,
      isSoundSetting : false
    };
  };
  
  onSetFullScreen = async () => {
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

  showSoundSetting = () => {
    this.setState({
      isSoundSetting: true, 
    })
  };

  handleOk = () => {
   this.setState({
    isModalVisible: false, 
   })
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false, 
    })
  };

  render() {
    const {isSoundSetting} = this.state;

    return (
      <header>
        <div className={cl('container')}>
          <div className = {cl('header-blocks-wrap')}>
            <div className = {cl('header-name-game')}>
              <p>Memory Game</p>
            </div>   
            <div className = {
              cl(
                'header-game-options',
                {
                  ['hidden'] : isSoundSetting,
                }
                )
              }
            >
              <div className={cl('switch-blact-theme')}>
                <Switch 
                  onChange={this.props.setBlackTheme} 
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
                  onClick={this.showSoundSetting}
                >
                  <SettingOutlined />
                </button>
              </div>  
            </div>
            <div className={
              cl(
                'header-sound-options',
                {
                  ['show'] : isSoundSetting,
                }
              )
            }>
              <Music />
            </div>  
          </div>  
        </div>   
      </header> 
    )
  }
};

export default Header;