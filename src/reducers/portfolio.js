import {
    FETCH_PORTFOLIO_REQUEST,
    FETCH_PORTFOLIO_SUCCESS,
    FETCH_PORTFOLIO_ERROR,
    CHOOSE_RISK_TOLERANCE,
    INVEST_FUNDS_REQUEST,
    INVEST_FUNDS_SUCCESS,
    INVEST_FUNDS_ERROR
} from "../actions/portfolio";
  
const initialState = {
    riskChoice: null,
    portfolio: null,
    loading: false,
    error: null
};
  
export function portfolioReducer(state = initialState, action) {
    if (action.type === CHOOSE_RISK_TOLERANCE) {
      return Object.assign({}, state, {
        riskChoice: action.riskChoice
      });
    } else if (action.type === FETCH_PORTFOLIO_REQUEST) {
      return Object.assign({}, state, {
        loading: true
      });
    } else if (action.type === FETCH_PORTFOLIO_SUCCESS) {
      return Object.assign({}, state, {
        portfolio: action.portfolio.risk,
        loading: false,
        error: null
      });
    } else if (action.type === FETCH_PORTFOLIO_ERROR) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    } else if (action.type === INVEST_FUNDS_REQUEST) {
      return Object.assign({}, state, {
        loading: true
      });
    } else if (action.type === INVEST_FUNDS_SUCCESS) {
      return Object.assign({}, state, {
        loading: false,
        error: null
      });
    } else if (action.type === INVEST_FUNDS_ERROR) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    }

    return state;
}
  
export default portfolioReducer;