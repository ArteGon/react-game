import React from 'react';
import cl from 'classnames';
import './style.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  };

  beginNewGame = () => {
    console.log(1);
  };

  render() {
    return (
      <button
        onClick = {this.beginNewGame}
        className = {cl('btn')}
      >
        Новая игра
      </button>
    )
  }
};

export default Header;