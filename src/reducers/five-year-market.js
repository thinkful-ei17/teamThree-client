import {
  FETCH_RISK_MARKET_REQUEST,
  FETCH_RISK_MARKET_SUCCESS,
  FETCH_RISK_MARKET_ERROR
} from "../actions/five-year-market";

let numeral = require('numeral');

const initialState = {
  data: null,
  loading: false,
  error: null
}

export function marketReducer(state = initialState, action) {
  if (action.type === FETCH_RISK_MARKET_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === FETCH_RISK_MARKET_SUCCESS) {
    console.log('market data = ', action.data)
    for(let i = 0; i < action.data.length; i++) {
      action.data[i].amtChange = numeral(action.data[i].amtChange).format('$0,0');
      action.data[i].y = numeral(action.data[i].y).format('$0,0');
    } 
    return Object.assign({}, state, {
      data: action.data,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_RISK_MARKET_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }

  return state;
}

export default marketReducer;