import {
  FETCH_RISK_MARKET_REQUEST,
  FETCH_RISK_MARKET_SUCCESS,
  FETCH_RISK_MARKET_ERROR
} from "../actions/five-year-market";

const initialState = {
  marketData: null,
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
      marketData: action.marketData,
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