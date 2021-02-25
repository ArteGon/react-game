import React from 'react';
import cl from 'classnames';
import '../../css/flip.css';
import './style.css';
import { QuestionCircleOutlined } from '@ant-design/icons';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id : this.props.cardId,
      isFlip : false,
      canFlip : true
    };
  };

  render() {
    const {isFlip, canFlip} = this.state;
    return (
      <div 
        className={ 
          cl(
            'card', 
            'flip-block', 
            this.props.difficultGame,
            {
              ['is-flip'] : isFlip
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
          </div>  
        </div>  
      </div>
    );
  };
};

export default Card;