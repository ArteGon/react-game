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
      attemptFindCouple : this.props.attemptFindCouple,
      hardCoreMode : this.props.isHardcoreMode,
    };
  };

  render() {
    const {placeNum, namePlayer, gameTime, attemptFindCouple, hardCoreMode} = this.state;

    return (
      <div className={cl('statistic-block')}>
        <p>Позиция: <span>{placeNum}</span></p>
        <p>Имя: <span>{namePlayer}</span></p>
        <p>Затраченное время: <span>{gameTime}</span></p>
        <p>Кол-во ходов: <span>{attemptFindCouple}</span></p>
        {
          hardCoreMode ? <p>В хардкор режиме</p> : null
        }
      </div> 
    )
  }
};

export default StatisticBlock;