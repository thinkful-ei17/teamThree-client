import React from 'react';
import { connect } from 'react-redux';
//import requiresLogin from './requires-login';
import Button from './button';

export class IntroductionPage extends React.Component {
    handleClick = () => {
        console.log('The button was clicked');
    }

    render() {
        return (
            <div className="introduction">
                <div className="introduction-title">
                  This is the title {this.props.title}
                </div>
                <div className="introduction-detail">
                  This is the contents {this.props.name}
                </div>
                <Button name='Got It!' handleClick={this.handleClick}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    //const {currentUser} = state.auth;
    return {
        //username: state.auth.currentUser.username,
        //name: `${currentUser.firstName} ${currentUser.lastName}`
    };
};

export default /*requiresLogin()*/(connect(mapStateToProps)(IntroductionPage));

//LINDA - comment out to get stuff to work