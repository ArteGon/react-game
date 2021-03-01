import React from 'react';
import cl from 'classnames';
import '../../css/common.css';
import 'antd/dist/antd.css';
import './style.css';
import { FullscreenOutlined, FullscreenExitOutlined, SettingOutlined } from '@ant-design/icons';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onFullScreen : false
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
            <div className={cl('game-statistics')}>
              Время: 00:00:00
              Кол-во ходов: 12
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
          </div>  
        </div>   
      </header> 
    )
  }
};

export default Header;