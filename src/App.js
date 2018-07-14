import React, { Component } from 'react';
import './App.css';


const Header = () => {
  return(
    <header className="box light-bg">
      <h1>Memory Game</h1>
      <p>Is it your Memory or your Luck</p>
      <h2>Instructions</h2>
      <p>Click on each picture ONLY ONCE!</p> 
      <p>Just like in Harry Potter, the piture move!! Dont let them Trick you!</p>
      <p>Click any picture a second time... You start from the beginnning</p>
      <p>Can you Get all 12 Pictures?</p>
    </header>
  )
}

const Game = (props) => {
  return(
    <section className="box">
      <div>Current Score: {props.currentScore}</div>
      <div>Top Score: {props.topScore}</div>
    </section>
  )
}

const ImgConatiner = (props) => {
  return(
    <section className="box light-bg ImgContainer">
    {props.gameCards.map(u => {
      return <ImgCard
              handleClick={props.handleClick}
              gameCards={u}/>
        })}
  </section>
  )
}

const ImgCard = (props) => {
  return(
    <div className="imgBox">
    <img src={props.gameCards.url}
          onClick={() => props.handleClick(props.gameCards.id)}/>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCards: [
        {id: 1, url: "https://source.unsplash.com/random/200x200", clicked: false},
        {id: 2, url: "https://source.unsplash.com/random/200x201", clicked: false},
        {id: 3, url: "https://source.unsplash.com/random/200x202", clicked: false},
        {id: 4, url: "https://source.unsplash.com/random/200x203", clicked: false},
        {id: 5, url: "https://source.unsplash.com/random/200x204", clicked: false},
        {id: 6, url: "https://source.unsplash.com/random/200x205", clicked: false},
        {id: 7, url: "https://source.unsplash.com/random/200x206", clicked: false},
        {id: 8, url: "https://source.unsplash.com/random/200x207", clicked: false},
        {id: 9, url: "https://source.unsplash.com/random/200x208", clicked: false},
        {id: 10, url: "https://source.unsplash.com/random/200x209", clicked: false},
        {id: 11, url: "https://source.unsplash.com/random/200x211", clicked: false},
        {id: 12, url: "https://source.unsplash.com/random/200x212", clicked: false},
      ],
      currentScore: [0],
      topScore: [0],
      shuffledCards: []
    };
    this.shuffle = this.shuffle.bind(this);
    this.switchValue = this.switchValue.bind(this);
    this.endGame = this.endGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  shuffle(array) {

  }

  createShuffleArray() {

  }

  shuffleClick(){
   
  }

  switchValue() {

  }

  endGame() {
    
  }

  handleClick = id => {
    console.log(id);
    console.log(this.state.gameCards[id-1].id);
    if (this.state.gameCards[id-1].id === id){
      console.log("hi");
      this.state.gameCards[id-1].setState({clicked: true,
      });

    }
  }

  
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Game
          currentScore={this.state.currentScore}
          topScore={this.state.topScore} 
          />
        <ImgConatiner
          gameCards={this.state.gameCards}
          handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
