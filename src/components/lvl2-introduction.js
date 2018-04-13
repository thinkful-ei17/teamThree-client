import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { Link } from 'react-router-dom';

import Button from './button';

import { showIntroCard , nextIntroCard, lvl2IntroComplete } from '../actions/intro';

export class Lvl2Introduction extends React.Component {
  render() {
    return (
      <div className="introduction viewport">
        <div className="row">
            <section className="introduction">
              <header>
                <h2 className="primary-heading">Let's get more realistic...</h2>
              </header>
              <main>
                <section className='intro-description'>
                  <p className="descriptive-content primary-text-color intro-description-p">Rather than investing with a single strategy for the entire year, you can divide up your portfolio between the various strategies.</p>
                  <p className="descriptive-content primary-text-color intro-description-p">Also in addition to being able to invest in managed funds, you can now invest in a set of specific companies.</p>
                  <p className="descriptive-content primary-text-color intro-description-p intro-emphasis">Remember, diversification is key.</p>
                </section>
                <div className='right-align-object'>
                    <Link to={'/lvl2-investment-form'}>
                        <Button class='blue-button' name="Let's Get Investing!" handleClick={this.markLvl2IntroComplete} />
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
    numCard: state.introReducer.numCard
  };
};

export default requiresLogin()(connect(mapStateToProps)(Lvl2Introduction));
