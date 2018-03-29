import {
  SHOW_LOGIN_FORM,
  HIDE_LOGIN_FORM,
  SHOW_REGISTRATION_FORM,
  HIDE_REGISTRATION_FORM
} from "../actions/users";

const initialState = {
  showLoginForm: false,
  showRegistrationForm: false,
  userLoggedIn: false
};

export function userReducer(state = initialState, action) {
  if (action.type === SHOW_LOGIN_FORM) {
    return Object.assign({}, state, {
      showLoginForm: true,
      userLoggedIn: false
    });
  } else if (action.type === HIDE_LOGIN_FORM) {
    return Object.assign({}, state, {
      showLoginForm: false,
      userLoggedIn: false
    });
  } else if (action.type === SHOW_REGISTRATION_FORM) {
    return Object.assign({}, state, {
      showRegistrationForm: true,
      userLoggedIn: false
    });
  } else if (action.type === HIDE_REGISTRATION_FORM) {
    return Object.assign({}, state, {
      showRegistrationForm: false,
      userLoggedIn: false
    });
  } else {
    return state;
  }
}

export default userReducer;
