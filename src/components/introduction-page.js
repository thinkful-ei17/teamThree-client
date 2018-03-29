import React from 'react';

import { connect } from 'react-redux';
import Button from './button';
//import { fetchIntro } from './actions';

class IntroductionPage extends React.Component {
  componentDidMount() {
    Promise.all([
      //this.props.dispatch(fetchIntro()),
      console.log('Component has mounted'),
    ]);
  }

  handleClick = () => {
    console.log('The button was clicked');
  }

  render() {
    return (
      
      <div className="introduction">
        <div className="row">
            <section className="introduction">
              <header>
                <h1 className="title">Title Goes Here {this.props.introCard.title}</h1>
              </header>
              <main>
                <div className="introduction-details">Details Go Here {this.props.introCard.details}</div>
                <Button name='Got It!' handleClick={this.handleClick}/>
              </main>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //introCard: Object.assign({}, state.intro.data, { loading: state.intro.loading }),
  introCard: {title: 'Stocks', details: 'Stocks Lorem Ipsum'},
});

export default connect(mapStateToProps)(IntroductionPage);
