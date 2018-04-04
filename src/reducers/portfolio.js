import {
    FETCH_PORTFOLIO_REQUEST,
    FETCH_PORTFOLIO_SUCCESS,
    FETCH_PORTFOLIO_ERROR,
    CHOOSE_RISK_TOLERANCE,
    INVEST_FUNDS_REQUEST,
    INVEST_FUNDS_SUCCESS,
    INVEST_FUNDS_ERROR,
    FETCH_RISK_OVERVIEW_REQUEST,
    FETCH_RISK_OVERVIEW_SUCCESS,
    FETCH_RISK_OVERVIEW_ERROR,
    INCREMENT_YEAR
} from "../actions/portfolio";
  
const initialState = {
  year: 0,
  previousFund: null,
  currentFund: 5000,
  riskChoice: null,
  portfolio: null,
  risks: null,
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
        portfolio: action.portfolio,
        year: action.year,
        previousFund: action.previousFund,
        currentFund: action.currentFund,
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
    } else if (action.type === INCREMENT_YEAR) {
      return Object.assign({}, state, {
        year: state.year + 1
      });
    } else if (action.type === FETCH_RISK_OVERVIEW_REQUEST) {
      return Object.assign({}, state, {
        loading: true
      });
    } else if (action.type === FETCH_RISK_OVERVIEW_SUCCESS) {
      return Object.assign({}, state, {
        risks: action.risks,
        loading: false,
        error: null
      });
    } else if (action.type === FETCH_RISK_OVERVIEW_ERROR) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    }

    return state;
}
  
export default portfolioReducer;