import React from 'react';
import cl from 'classnames';
import './style.css';

import { Form, Input, Button, Checkbox } from 'antd';

class EndGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showStatistics : false,
      gameTime : this.getGameTime(),
      arrayResults : []
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

  RenderNameForm = () => {
    const onFinish = (values) => {
      this.setState({
        namePlayer : values.username,
        attemptFindCouple : this.props.attemptFindCouple,
        showStatistics : true,
      }, () => {
        this.addItemInLocalStorage();
      });      
    };

    return (
      <>
        <div className={cl('title')}>
          <h2>Игра окончена</h2>
          <p className={cl('text-under-title')}>Введите Ваше имя, чтобы посомтреть результаты</p>
        </div>
        <div className={cl('form-name')}>
          <Form
            onFinish={onFinish}
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
    );
  };

  addItemInLocalStorage = () => {
    const difficultGame = this.props.difficultGame;
    let arrayNeedStatistics = JSON.parse(localStorage.getItem(difficultGame)) || [];
    const playerResult = {
      'name' : this.state.namePlayer,
      'attemptFindCouple' : this.state.attemptFindCouple,
      'gameTime' : this.state.gameTime,
    };
    arrayNeedStatistics.push(playerResult);
    localStorage.setItem(difficultGame, JSON.stringify(arrayNeedStatistics));

    this.setState({
      arrayResults : JSON.parse(localStorage.getItem(difficultGame)),
    });
  };

  StatisticBlock = () => {
    return (
      <div className={cl('stitistic-block')}>
        <p>Имя: {this.props.attemptFindCouple}</p>
        <p>Затраченное время: {this.props.gameTime}</p>
        <p>Кол-во ходов: {this.props.namePlayer}</p> 
      </div> 
    )
  }

  RenderGameStatistics = () => {
    const {arrayResults} = this.state;
    return (
      <>
        <div className={cl('title')}>
          <h2>Статистика</h2>
        </div>
        <div className={cl('statistics-wrap')}>
          <div className={cl('title')}>
            <h2>Выбранный уровень сложности: {this.props.difficultGame}</h2>
          </div>  
          {
            arrayResults.map((item, index) => {
              return <this.StatisticBlock
                key = {index}
                namePlayer = {item.name}
                gameTime = {item.gameTime}
                attemptFindCouple = {item.attemptFindCouple}
              />
            })
          }
        </div> 
      </>    
    );
  };

  render() {
    const {showStatistics} = this.state;

    return (
      <section className={cl('end-game')}>
        <div className={cl('container')}>
          {
            showStatistics ? <this.RenderGameStatistics /> : <this.RenderNameForm />
          } 
        </div>
      </section>
    )
  }
};

export default EndGame;