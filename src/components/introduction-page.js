import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { Link } from 'react-router-dom';

import Button from './button';

import { showIntroCard , nextIntroCard } from '../actions/intro';

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
    let link = '';

    if(this.props.numCard === 3 || this.props.introComplete) {
      link = '/risk-breakdown';
    }
    
    return (
      <div className="introduction viewport">
        <div className="row">
            <section className="introduction">
              <header>
                <h2 className="primary-heading">{this.props.introCard[this.props.numCard].title}</h2>
              </header>
              <main>
                <section className='intro-description'>
                  <p className="descriptive-content primary-text-color intro-description-p">{this.props.introCard[this.props.numCard].detailA}</p>
                  <p className="descriptive-content primary-text-color intro-description-p">{this.props.introCard[this.props.numCard].detailB}</p>
                  <p className="descriptive-content primary-text-color intro-description-p intro-emphasis">{this.props.introCard[this.props.numCard].detailC}</p>
                </section>
                <div className='right-align-object'>
                  <Link to={link}>
                    <Button class='blue-button' name='Got It!' handleClick={this.nextCardClick}/>
                  </Link>
                </div>
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
