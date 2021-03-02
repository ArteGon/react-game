import React from 'react';
import cl from 'classnames';
import './style.css';
import DifficultyLevel from './DifficultyLevel';
import WrapperCards from './WrapperCards';
import EndGame from './EndGame';
import GameOver from './GameOver';



class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLevelSelect : false,
      countCoupleLeft : -1, // любое число, отличное от нуля
      attemptFindCouple : 0,
      isHardcoreMode : false,
    };
  };

  selectButton = (imagesList, difficultGame, isHardcoreMode = false) => {
    if (isHardcoreMode) {
      this.setState( (state) => {
        return {
          isLevelSelect : !state.isLevelSelect,
          cardList : imagesList,
          countCoupleLeft : imagesList.length,
          difficultGame : difficultGame,
          startGameTime : new Date().getTime(),
          isHardcoreMode : !state.isHardcoreMode,
          countErrors : 5
        };
      });
    }else {
      this.setState( (state) => {
        return {
          isLevelSelect : !state.isLevelSelect,
          cardList : imagesList,
          countCoupleLeft : imagesList.length,
          difficultGame : difficultGame,
          startGameTime : new Date().getTime()
        };
      });
    };
  };

  subtractOneCouple = () => {
    this.setState((state) => {
      return {
        countCoupleLeft : state.countCoupleLeft - 1,
        endGameTime : new Date().getTime()
      };
    });
  };

  gameStatistics = (findCouple = false) => {
    if (findCouple) {
      this.setState((state) => {
        return {
          countCoupleLeft : state.countCoupleLeft - 1,
          endGameTime : new Date().getTime(),
          attemptFindCouple : state.attemptFindCouple + 1
        };
      });
    }else {
      this.setState((state) => {
        return {
          endGameTime : new Date().getTime(),
          attemptFindCouple : state.attemptFindCouple + 1
        };
      });
    };
  };

  wrongMove = () => {
    this.setState((state) => {
      return {
        countErrors : state.countErrors - 1,
      };
    });
  };

  render() {
    const {isLevelSelect, cardList, difficultGame, countCoupleLeft, startGameTime, endGameTime, attemptFindCouple, isHardcoreMode, countErrors} = this.state;
    if (countCoupleLeft !== 0 && countErrors !== 0) {
      return (
        isLevelSelect ? 
          <WrapperCards 
            cardList = {cardList}
            difficultGame = {difficultGame}
            gameStatistics = {this.gameStatistics}
            wrongMove = {this.wrongMove}
            isHardcoreMode = {isHardcoreMode}
          /> 
          : 
          <DifficultyLevel 
            isLevelSelect = {isLevelSelect}
            selectButton = {this.selectButton}
          />
      )    
    }else{
      return (
        countErrors !== 0 ?
        <EndGame 
          startGameTime = {startGameTime}
          endGameTime = {endGameTime}
          attemptFindCouple = {attemptFindCouple}
          difficultGame = {difficultGame}
          isHardcoreMode = {isHardcoreMode}
        /> : 
        <GameOver 
        
        />
      )
    }
  }
};

export default Game;