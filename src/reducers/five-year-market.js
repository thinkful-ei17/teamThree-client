import {
  FETCH_RISK_MARKET_REQUEST,
  FETCH_RISK_MARKET_SUCCESS,
  FETCH_RISK_MARKET_ERROR,
  FETCH_LVL2_RISK_MARKET_ERROR,
  FETCH_LVL2_RISK_MARKET_REQUEST,
  FETCH_LVL2_RISK_MARKET_SUCCESS
} from "../actions/five-year-market";

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
  } else if (action.type === FETCH_LVL2_RISK_MARKET_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === FETCH_LVL2_RISK_MARKET_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_LVL2_RISK_MARKET_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }

  return state;
}

export default marketReducer;