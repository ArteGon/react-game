import React from 'react';
import cl from 'classnames';
import './style.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  };

  render() {
    return (
      <button
        onClick = {() => document.location.reload()}
        className = {cl('btn', 'btn-new-game')}
      >
        Новая игра
      </button>
    )
  }
};

export default Header;