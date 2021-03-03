import React from 'react';
import cl from 'classnames';
import './style.css';
import NewGame from '../../NewGame';

class GameOver extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  render() {
    return (
      <section className={cl('game-over')}>
        <div className={cl('container')}>
          <div className={cl('title')}>
            <h2>Вы проиграли :(</h2>
          </div>  
          <div className={cl('new-game-wrap')}>
            <NewGame 
              startNewGame = {this.props.startNewGame}
            />
          </div>  
        </div>
      </section>
    )
  }
};

export default GameOver;