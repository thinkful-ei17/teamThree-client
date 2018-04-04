import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const SHOW_LOGIN_FORM = 'SHOW_LOGIN_FORM';
export const showLoginForm = () => ({
    type: SHOW_LOGIN_FORM
});

export const HIDE_LOGIN_FORM = 'HIDE_LOGIN_FORM';
export const hideLoginForm = () => ({
    type: HIDE_LOGIN_FORM
});

export const SHOW_REGISTRATION_FORM = 'SHOW_REGISTRATION_FORM';
export const showRegistrationForm = () => ({
    type: SHOW_REGISTRATION_FORM
});

export const HIDE_REGISTRATION_FORM = 'HIDE_REGISTRATION_FORM';
export const hideRegistrationForm = () => ({
    type: HIDE_REGISTRATION_FORM
});

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
