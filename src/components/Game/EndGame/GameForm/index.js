import React from 'react';
import cl from 'classnames';
import './style.css';

import { Form, Input, Button} from 'antd';

class GameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameTime : this.getGameTime(),
    };
  };

  getGameTime = () => {
    const durationGame = this.props.endGameTime - this.props.startGameTime;
    let milliseconds = parseInt((durationGame % 1000) / 100);
    let seconds = parseInt((durationGame / 1000) % 60);
    let minutes = parseInt((durationGame / (1000 * 60)) % 60);
    let hours = parseInt((durationGame / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  };

  onFinish = (values) => {
    this.setState({
      namePlayer : values.username,
      attemptFindCouple : this.props.attemptFindCouple,
    }, () => {
      this.props.showStatistics();
      this.addItemInLocalStorage();
    });      
  };

  addItemInLocalStorage = () => {
    const difficultGame = this.props.difficultGame;
    let arrayNeedStatistics = JSON.parse(localStorage.getItem(difficultGame)) || [];
    const playerResult = {
      'name' : this.state.namePlayer,
      'attemptFindCouple' : this.state.attemptFindCouple,
      'gameTime' : this.state.gameTime,
      'hardCoreMode' : this.props.isHardcoreMode
    };
    arrayNeedStatistics.unshift(playerResult);
    if (arrayNeedStatistics.length > 10) {
      arrayNeedStatistics.length = 10;
    };
    localStorage.setItem(difficultGame, JSON.stringify(arrayNeedStatistics));
  };

  render() {
    return (
      <>
        <div className={cl('title')}>
          <h2>Игра окончена</h2>
          <p className={cl('text-under-title')}>Введите Ваше имя, чтобы посомтреть результаты</p>
        </div>
        <div className={cl('form-name')}>
          <Form
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input />
            </Form.Item>        
            <Form.Item>
              <Button 
                type="submit" 
                htmlType="submit" 
                className={cl('btn')}
              >
                Ввести
              </Button>
            </Form.Item>
          </Form>
        </div>
      </>
    )
  }
};

export default GameForm;