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
    };
  };

  selectButton = (imagesList, difficultGame) => {
    this.setState( (state) => {
      return {
        isLevelSelect : !state.isLevelSelect,
        cardList : imagesList,
        countCoupleLeft : imagesList.length,
        difficultGame : difficultGame
      };
    });
  };

  subtractOneCouple = () => {
    this.setState((state) => {
      return {
        countCoupleLeft : state.countCoupleLeft - 1
      };
    });
  };

  render() {
    const {isLevelSelect, cardList, difficultGame, countCoupleLeft} = this.state;
    if (countCoupleLeft !== 0) {
      return (
        isLevelSelect ? 
          <WrapperCards 
            cardList = {cardList}
            difficultGame = {difficultGame}
            subtractOneCouple = {this.subtractOneCouple}
          /> 
          : 
          <DifficultyLevel 
            isLevelSelect = {isLevelSelect}
            selectButton = {this.selectButton}
          />
      )    
    }else{
      return <EndGame />
    }
  }
};

export default Game;