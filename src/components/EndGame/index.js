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
      this.setState((state) => {
        return {
          namePlayer : values.username,
          attemptFindCouple : this.props.attemptFindCouple,
          showStatistics : !state.showStatistics,
        }
      })
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

  RenderGameStatistics = () => {
    const {namePlayer, gameTime, attemptFindCouple} = this.state;
    return (
      <>
        <div className={cl('title')}>
          <h2>Статистика</h2>
        </div>
        <div className={cl('statistics-wrap')}>
          <div className={cl('stitistic-block')}>
            <p>Имя: {namePlayer}</p>
            <p>Затраченное время: {gameTime}</p>
            <p>Кол-во ходов: {attemptFindCouple}</p> 
          </div>  
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