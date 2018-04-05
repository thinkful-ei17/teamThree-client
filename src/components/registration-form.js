import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';

import Input from './input';

import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import { hideRegistrationForm } from '../actions/users';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';

import './registration-form.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName,bday,email} = values;
        const user = {username, password, firstName, lastName,bday,email};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <div className='registration'>
                <span className="close js-close" onClick={() => this.props.dispatch(hideRegistrationForm())}> &times; </span>
                <form
                    className="login-form registration-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <div className='form-div'>
                      <label className="app-label" htmlFor="firstName">First name</label>
                        <Field component={Input} type="text" name="firstName" />
                    </div>
                    <div className='form-div'>
                      <label className="app-label" htmlFor="lastName">Last name</label>
                        <Field component={Input} type="text" name="lastName" />
                    </div>
                    <div className='form-div'>
                        <label className="app-label" htmlFor="bday">Birth Day</label>
                        <Field component={Input} type="date" name="bday" />
                    </div>
                    <div className='form-div'>
                        <label className="app-label" htmlFor="email">Email</label>
                        <Field
                            component={Input}
                            type="text"
                            name="email"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
                    </div>
                    <div className='form-div'>
                        <label className="app-label" htmlFor="username">Username</label>
                        <Field
                            component={Input}
                            type="text"
                            name="username"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
                    </div>
                    <div className='form-div'>
                        <label className="app-label" htmlFor="password">Password</label>
                        <Field
                            component={Input}
                            type="password"
                            name="password"
                            validate={[required, passwordLength, isTrimmed]}
                        />
                    </div>
                    <div className='form-div'>
                        <label className="app-label" htmlFor="passwordConfirm">Confirm password</label>
                        <Field
                            component={Input}
                            type="password"
                            name="passwordConfirm"
                            validate={[required, nonEmpty, matchesPassword]}
                        />
                    </div>
                    <div className='form-div'>
                        <button 
                            className='user-form-button'
                            type="submit"
                            disabled={this.props.pristine || this.props.submitting}>
                            Register
                        </button>
                    </div>    
                    
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
