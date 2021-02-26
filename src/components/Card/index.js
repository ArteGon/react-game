import React from 'react';
import cl from 'classnames';
import '../../css/flip.css';
import './style.css';
import { QuestionCircleOutlined, CheckSquareOutlined } from '@ant-design/icons';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id : this.props.cardId,
      isFlip : false,
      canFlip : true,
      isFindCouple : false
    };
  };

  render() {
    const {isFlip, canFlip, isFindCouple} = this.state;
    return (
      <div 
        className={ 
          cl(
            'card', 
            'flip-block', 
            this.props.difficultGame,
            {
              ['is-flip'] : isFlip,
              ['is-find-couple'] : isFindCouple
            },
          ) 
        }
        onClick = {canFlip ? () => this.props.sendCardInWrapperCards(this) : null}
      >
        <div className={ cl('flip-card') }>
          <div className={ cl('front-side')} >
            <QuestionCircleOutlined />
          </div>  
          <div className={ cl('back-side') }>
            <img src={require(`./img/${this.props.cardImageSrc}`).default} />
            {isFindCouple ? <CheckSquareOutlined /> : null}
          </div>  
        </div>  
      </div>
    );
  };
};

export default Card;