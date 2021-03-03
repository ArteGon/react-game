import React from 'react';
import cl from 'classnames';
import './style.css';
import GameForm from './GameForm';
import GameStatistics from './GameStatistics';

class EndGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showStatistics : false,
    };
  };

  showStatistics = () => {
    this.setState((state) => {
      return{
        showStatistics : !state.showStatistics,
      }
    });
  }

  render() {
    const {showStatistics} = this.state;

    return (
      <section className={cl('end-game')}>
        <div className={cl('container')}>
          {
            showStatistics ? 
              <GameStatistics 
                difficultGame = {this.props.difficultGame}
                startNewGame = {this.props.startNewGame}
              /> : 
              <GameForm 
                startGameTime = {this.props.startGameTime}
                endGameTime = {this.props.endGameTime}
                showStatistics = {this.showStatistics} 
                difficultGame = {this.props.difficultGame}
                attemptFindCouple = {this.props.attemptFindCouple}
                isHardcoreMode = {this.props.isHardcoreMode}
              />
          } 
        </div>
      </section>
    )
  }
};

export default EndGame;