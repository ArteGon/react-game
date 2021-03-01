import React from 'react';
import cl from 'classnames';
import './style.css';
import DifficultyLevel from '../DifficultyLevel';
import WrapperCards from '../WrapperCards';
import EndGame from '../EndGame';



class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLevelSelect : false,
      countCoupleLeft : -1, // любое число, отличное от нуля
      attemptFindCouple : 0
    };
  };

  selectButton = (imagesList, difficultGame) => {
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
    }
  }

  render() {
    const {isLevelSelect, cardList, difficultGame, countCoupleLeft, startGameTime, endGameTime, attemptFindCouple} = this.state;
    if (countCoupleLeft !== 0) {
      return (
        isLevelSelect ? 
          <WrapperCards 
            cardList = {cardList}
            difficultGame = {difficultGame}
            gameStatistics = {this.gameStatistics}
          /> 
          : 
          <DifficultyLevel 
            isLevelSelect = {isLevelSelect}
            selectButton = {this.selectButton}
          />
      )    
    }else{
      return (
        <EndGame 
          startGameTime = {startGameTime}
          endGameTime = {endGameTime}
          attemptFindCouple = {attemptFindCouple}
        />
      )
    }
  }
};

export default Game;