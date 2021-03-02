import React from 'react';
import cl from 'classnames';
import './style.css';
import ButtonLevel from './ButtonLevel';
// Список карточек по уровням
import easyCards from  '../../../cards/easy-level';
import middleCards from  '../../../cards/middle-level';
import hardCards from  '../../../cards/hard-level';
import { Switch } from 'antd';


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
      isHardcoreMode : false,
    };
  };

  setHardcoreMode = value => {
    this.setState({ isHardcoreMode: value });
  };

  render() {
    const {buttonsCharacters, isHardcoreMode} = this.state;

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
                  isHardcoreMode = {isHardcoreMode}
                />
              })
            }
          </div>
          <div className={cl('hardcore-mode')}>
            <p>Режим хардкор (если выбран этот режим, то у Вас будет возможность ошибиться тоолько 4 раза)</p>
            <Switch 
              onChange={this.setHardcoreMode} 
            />
          </div>  
        </div>  
      </section>
    )
  }
};

export default DifficultyLevel;