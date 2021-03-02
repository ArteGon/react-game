import React from 'react';
import cl from 'classnames';
import './style.css';

import Card from './Card';

class WrapperCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomCardList : this.getNewCards(this.props.cardList),
      firstCard : null,
    };
  };

  shuffleArray(array) {
    return array.sort(() => .5 - Math.random());
  }

  getNewCards = (cardList) => {
    const allCards = [...cardList, ...cardList];

    return this.shuffleArray(allCards);
  };

  getCard = (card) => {
    this.flipCard(card);
  };

  flipCard = (card) => {
    card.setState({
      isFlip : !this.state.isFlip,
      canFlip : false
    }, () => {
      setTimeout(() => {
        this.state.firstCard ? this.gameLogic(card) : this.getFirstCard(card);
      }, 1000);
    });
  };

  getFirstCard = (card) => {
    console.log(card);
    this.setState(() => {
      return {
        firstCard : card
      }
    }); 
  };

  clearFirstCard = () => {
    this.setState((state) => {
      return {
        firstCard : null
      };
    });
  };

  cardsEqual = (firstCard, secondCard) => {
    firstCard.setState(() => {
      return {
        isFlip : true,
        canFlip : false,
        isFindCouple : true
      }  
    });
    secondCard.setState(() => {
      return {
        isFlip : true,
        canFlip : false,
        isFindCouple : true
      }  
    });
    this.props.gameStatistics(true);
    this.clearFirstCard();
  }

  cardsNotEqual = (firstCard, secondCard) => {
    firstCard.setState(() => {
      return {
        isFlip : false,
        canFlip : true
      }  
    })
    secondCard.setState(() => {
      return {
        isFlip : false,
        canFlip : true
      }  
    });
    this.props.gameStatistics();
    if (this.props.isHardcoreMode) {
      this.props.wrongMove();
    };
    this.clearFirstCard();
  };

  gameLogic = (card) => {
    const firstCard = this.state.firstCard;
    firstCard.state.id === card.state.id ? this.cardsEqual(firstCard, card) : this.cardsNotEqual(firstCard, card);
  };

  render() {
    return (
      <section className={cl('cards-wrap')}>
        <div className={ cl('container') }>
          <div className={ cl('flip-blocks-wrap') }>
            {
              this.state.randomCardList.map( (item, index) => {
                return <Card 
                        key = {index}
                        cardId = {item.id}              
                        cardImageSrc = {`${this.props.difficultGame}-cards/${item.src}`}
                        sendCardInWrapperCards = {this.getCard}
                        difficultGame = {this.props.difficultGame}
                      />
              })
            }             
          </div>
        </div>  
      </section> 
    )
  }
};

export default WrapperCards;