import React from 'react';
import cl from 'classnames';
import '../../css/common.css';
import './style.css';
import myLogoLight from './img/logo-light.png';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  };
  
  render() {
    return (
      <header>
        <div className={cl('container')}>
          <div className = {cl('header-blocks-wrap')}>
            {/* <div className = {cl('header-logo')}>
              <img src = {myLogoLight} />
            </div>   */}
            <div className = {cl('header-name-game')}>
              <p>Memory Game</p>
            </div>  
            <div className = {cl('header-game-options')}>

            </div>  
          </div>  
        </div>   
      </header> 
    )
  }
};

export default Header;