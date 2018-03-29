import React from 'react';

import Button from './button';

export default class IntroductionPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {cardNum: 0, introCard: [
    {titel: 'Game', details: 'Here\'s how to play!'},
    {title: 'Stocks', details: 'Stocks Lorem Ipsum'},
    {title: 'Bonds', details: 'Bonds Lorem Ipsum'},
    {title: 'Managed Fund', details: 'Managed Fund Lorem Ipsum'}]}
  }

  handleClick = () => {
    this.setState(prevState => {
      return {cardNum: prevState.cardNum + 1}
    })
    console.log('The button was clicked');
  }

  render() {
    return (
      <div className="introduction">
        <div className="row">
            <section className="introduction">
              <header>
                <h1 className="title">{this.state.introCard[this.state.cardNum].title}</h1>
              </header>
              <main>
                <div className="introduction-details">{this.state.introCard[this.state.cardNum].details}</div>
                <Button name='Got It!' handleClick={this.handleClick}/>
              </main>
          </section>
        </div>
      </div>
    );
  }
}
