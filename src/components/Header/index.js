import React from 'react';
import cl from 'classnames';
import '../../css/common.css';
import 'antd/dist/antd.css';
import './style.css';
import { FullscreenOutlined, FullscreenExitOutlined, SettingOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onFullScreen : false,
      isBlackTheme : false
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

  render() {
    return (
      <header>
        <div className={cl('container')}>
          <div className = {cl('header-blocks-wrap')}>
            <div className = {cl('header-name-game')}>
              <p>Memory Game</p>
            </div>   
            <div className = {cl('header-game-options')}>
              <button
                className={cl('btn', 'fullscreen-button')}
                onClick = {this.onSetFullScreen}
              >
                {this.state.onFullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
              </button>
              <button
                className={cl('btn', 'setting-button')}
              >
                <SettingOutlined />
              </button>
            </div>  
            <div className={cl('switch-blact-theme')}>
              <p>Черная тема</p>
              <Switch 
                onChange={this.props.setBlackTheme} 
              />
            </div>
          </div>  
        </div>   
      </header> 
    )
  }
};

export default Header;