import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';

import Input from './input';

import { hideLoginForm } from '../actions/users';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import './login-form.css';
import '../index.css';


export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
                
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                
                <span className="close js-close" onClick={() => this.props.dispatch(hideLoginForm())}> &times; </span>
                <div className="field-container">
                {error}
                <label className="app-label" htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label className="app-label" htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button 
                    className='user-form-button'
                    disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
               </div> 
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
