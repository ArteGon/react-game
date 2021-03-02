import React from 'react';
import cl from 'classnames';
import './style.css';
import StatisticBlock from './StatisticBlock';
import NewGame from '../../../NewGame';

class GameStatistics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortArrayResults : this.sortResults(),
    };
  };
  
  sortResults() {
    const arrayResult = JSON.parse(localStorage.getItem(this.props.difficultGame));

    return arrayResult.sort((a, b) => a.attemptFindCouple > b.attemptFindCouple ? 1 : -1);
  }

  render() {
    const {sortArrayResults} = this.state;

    return (
      <>
        <div className={cl('title')}>
          <h2>Таблица рекордов</h2>
        </div>
        <div className={cl('statistics-wrap')}>
          <div className={cl('title')}>
            <p>Выбранный уровень сложности: <span>{this.props.difficultGame}</span></p>
          </div> 
          {
           sortArrayResults.map((item, index) => {
             console.log(item);
             return <StatisticBlock 
                      key = {index + 1}
                      placeNum = {index + 1}
                      namePlayer = {item.name}
                      gameTime = {item.gameTime}
                      attemptFindCouple = {item.attemptFindCouple}
                      isHardcoreMode = {item.hardCoreMode}
                    />
           }) 
          }
        </div>
        <div className={cl('new-game-wrap')}>
          <NewGame />
        </div>
      </>
    )
  }
};

export default GameStatistics;