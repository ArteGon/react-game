import React from 'react';
import cl from 'classnames';
import './style.css';
import ButtonLevel from './ButtonLevel';
// Список карточек по уровням
import easyCards from  '../../../cards/easy-level';
import middleCards from  '../../../cards/middle-level';
import hardCards from  '../../../cards/hard-level';


class DifficultyLevel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonsCharacters : [
        {
          id : 0,
          buttonText : 'Легкая',
          difficultGame : 'easy',
          imagesList : easyCards  
        },
        {
          id : 1,
          buttonText : 'Средняя',
          difficultGame : 'middle',
          imagesList : middleCards  
        },
        {
          id : 2,
          buttonText : 'Тяжелая',
          difficultGame : 'hard',
          imagesList : hardCards  
        }
      ],
    };
  };
  
  render() {
    const {buttonsCharacters} = this.state;

    return (      
      <section className= {cl('difficult-level')}>
        <div className={ cl('container') }>
          <div className={cl('title')}>
            <h1>Добро пожаловать!</h1>
            <p className={cl('text-under-title')}>Чтобы начать игру, выберите уровень сложности</p>
          </div>  
          <div className={ cl('difficult-level-wrap') }>
            {
              buttonsCharacters.map((item) => {
                return <ButtonLevel 
                  key = {item.id}
                  buttonsCharacters = {item}
                  btnText = {item.buttonText}
                  btnLevel = {item.difficultGame}
                  cardList = {item.imagesList}
                  selectButton = {this.props.selectButton}
                />
              })
            }
          </div>
        </div>  
      </section>
    )
  }
};

export default DifficultyLevel;