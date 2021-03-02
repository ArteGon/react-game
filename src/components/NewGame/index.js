import React from 'react';
import cl from 'classnames';
import './style.css';

class NewGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  };

  render() {
    return (
      <>
        {
          <button
            onClick = {() => this.props.startNewGame()}
            className = {cl('btn', 'btn-new-game')}
          >
            Новая игра
          </button>
        }
      </>
    )
  }
};

export default NewGame;