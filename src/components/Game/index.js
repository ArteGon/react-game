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
      isLevelSelect : false
    };
  };

  selectButton = (imagesList, difficultGame) => {
    this.setState( (state) => {
      return {
        isLevelSelect : !state.isLevelSelect,
        cardList : imagesList,
        difficultGame : difficultGame
      };
    });
  };

  render() {
    const {isLevelSelect, cardList, difficultGame} = this.state;
    return (
      <>  
        { 
          isLevelSelect ? 
            <WrapperCards 
              cardList = {cardList}
              difficultGame = {difficultGame}
            /> 
            : <DifficultyLevel 
              isLevelSelect = {isLevelSelect}
              selectButton = {this.selectButton}
            />
        }
      </> 
    )
  }
};

export default Game;