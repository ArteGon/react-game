import React from 'react';
import cl from 'classnames';
import './style.css';

class ButtonLevel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  getButtonParam = () => {
    const buttonsCharacters = this.props.buttonsCharacters;
    const cardList = buttonsCharacters.imagesList;
    const difficultGame = buttonsCharacters.difficultGame;
    
    this.props.selectButton(cardList, difficultGame);
  };

  render() {
    return (
      <>
        <button
          onClick = {this.getButtonParam}
          className = {cl('btn', this.props.btnLevel)}
        >
          {this.props.buttonsCharacters.buttonText}
        </button>  
      </> 
    );
  };
};

export default ButtonLevel;