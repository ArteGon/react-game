import React from 'react';
import cl from 'classnames';
import './style.css';


class ButtonNewGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  render() {
    return (
      <button
        onClick = {this.props.startNewGame}
        className = {cl('btn', 'btn-new-game')}
      >
        {this.props.btnText}
      </button>  
    );
  };
};

export default ButtonNewGame;