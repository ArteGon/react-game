import React from 'react';
import cl from 'classnames';
import './style.css';

class StatisticBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeNum : this.props.placeNum,
      namePlayer : this.props.namePlayer,
      gameTime : this.props.gameTime,
      attemptFindCouple : this.props.attemptFindCouple
    };
  };

  render() {
    const {placeNum, namePlayer, gameTime, attemptFindCouple} = this.state;

    return (
      <div className={cl('statistic-block')}>
        <p>Позиция: {placeNum}</p>
        <p>Имя: {namePlayer}</p>
        <p>Затраченное время: {gameTime}</p>
        <p>Кол-во ходов: {attemptFindCouple}</p>
      </div> 
    )
  }
};

export default StatisticBlock;