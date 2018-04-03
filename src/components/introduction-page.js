import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { Link } from 'react-router-dom';

import Button from './button';

import { showIntroCard , nextIntroCard, hideIntroCard } from '../actions/intro-page';

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
    let link='';
    if(this.props.numCard === 3 || this.props.introComplete) {
      link = '/risk-breakdown';
    }
    return (
      <div className="introduction">
        <div className="row">
            <section className="introduction">
              <header>
                <h1 className="title">{this.props.introCard[this.props.numCard].title}</h1>
              </header>
              <main>
                <div className="introduction-details">{this.props.introCard[this.props.numCard].details}</div>
                <Link to={link}>
                  <Button name='Got It!' handleClick={this.nextCardClick}/>
                </Link>
              </main>
          </section>
        </div>
      </div>
    );
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
