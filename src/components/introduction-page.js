import React from 'react';

import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { Redirect } from 'react-router-dom';
import { showIntroCard , nextIntroCard, hideIntroCard } from '../actions/intro-page';
import Button from './button';

export class IntroductionPage extends React.Component {
  componentDidMount(){
    this.props.dispatch(showIntroCard(this.props.numCard, this.props.introCard));
    console.log('component did mount intro page');
  }

  nextCardClick = () => {
    this.props.dispatch(nextIntroCard(this.props.numCard, this.props.introCard));
    console.log('The button was clicked in intro page');
  }

  render() {
    if(this.props.numCard === 3 || this.props.introComplete) {
      //should redirect to risk dashboard - Sam/Scott to add
      return (<Redirect to="/dashboard"/>);
    }
    else {
      return (
        <div className="introduction">
          <div className="row">
              <section className="introduction">
                <header>
                  <h1 className="title">{this.props.introCard[this.props.numCard].title}</h1>
                </header>
                <main>
                  <div className="introduction-details">{this.props.introCard[this.props.numCard].details}</div>
                  <Button name='Got It!' handleClick={this.nextCardClick}/>
                </main>
            </section>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return{
    introCard: state.introReducer.introCard,
    numCard: state.introReducer.numCard,
    introComplete: state.introReducer.introComplete
  };
};

export default requiresLogin()(connect(mapStateToProps)(IntroductionPage));