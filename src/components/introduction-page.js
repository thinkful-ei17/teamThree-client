import React from 'react';
import { connect } from 'react-redux';
//import requiresLogin from './requires-login';
//import { Redirect } from 'react-router-dom';
import { showIntroStart, showNextIntro } from '../actions/intro-page';
import Button from './button';

export class IntroductionPage extends React.Component {
  componentDidMount(){
    this.props.dispatch(showIntroStart(this.props.numCard, this.props.introCard));
    console.log('component did mount');
  }

  nextCardClick = () => {
    this.props.dispatch(showNextIntro(this.props.numCard, this.props.introCard));
    console.log('The button was clicked');
  }
//risk breakdown => direct to risk breakdown
  render() {
    return (
      <div className="introduction">
        <div className="row">
            <section className="introduction">
              <header>
                <h1 className="title">{/*this.props.introCard[this.props.]*/}</h1>
              </header>
              <main>
                <div className="introduction-details">{/*this.props.introCard*/}</div>
                <Button name='Got It!' handleClick={this.nextCardClick}/>
              </main>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('hi intro', state.introReducer.introCard);
  console.log('hi numCard', state.introReducer.numCard);
  return{
    introCard: state.introReducer.introCard,
    numCard: state.introReducer.numCard,
  };
};

export default /*requiresLogin()*/(connect(mapStateToProps)(IntroductionPage));
