import React from 'react';
import cl from 'classnames';
import './style.css';

import { Form, Input, Button, Checkbox } from 'antd';

class EndGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showStatistics : false,
    };
  };

  RenderNameForm = () => {
    const onFinish = (values) => {
      console.log('Success:', values);
      this.setState((state) => {
        return {
          showStatistics : !state.showStatistics
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
    return (
      <>
        <div className={cl('title')}>
          <h2>Статистика</h2>
        </div>
        <div className={cl('statistics-wrap')}>
          <div className={cl('stitistic-block')}>
            <p>Имя:</p>
            <p>Затраченное время:</p>
            <p>Кол-во ходов:</p> 
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