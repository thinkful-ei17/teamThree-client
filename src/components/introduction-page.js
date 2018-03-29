import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from './button';

export default class IntroductionPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {cardNum: 0, introCard: [
    {number: 0, title: 'So You Want to Be An Investor...', details: 'There are a couple of things you should know about to get started.'},
    {number: 1, title: 'Stocks', details: 'Stocks Lorem Ipsum Concise'},
    {number: 2, title: 'Bonds', details: 'Bonds Lorem Ipsum Concise'},
    {number: 3, title: 'Managed Fund', details: 'Managed Fund Lorem Ipsum Concise'}]}
  }

  handleClick = () => {
    this.setState(prevState => {
      console.log('what is cardNum', this.state.cardNum);
      if (this.state.cardNum > 3) {
        console.log('did this work????');
        return <Redirect to="/" />;
      }
      else {
        return {cardNum: prevState.cardNum + 1}
      }
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

//how to get last button to redirect to next page?
