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
    RESTART_LEVEL_1_REQUEST,
    RESTART_LEVEL_1_SUCCESS,
    RESTART_LEVEL_1_ERROR, 
    INCREMENT_YEAR 
} from '../actions/portfolio';
let numeral = require('numeral');

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
      console.log('action.portfolio = ', action.portfolio)
      for(let i = 1; i < action.portfolio.length; i++){
        action.portfolio[i].previousYear = numeral(action.portfolio[i].previousYear).format('0,0')
        action.portfolio[i].y = numeral(action.portfolio[i].y).format('0,0')
        console.log('previous year = ', action.portfolio[i].previousYear)
      }
      return Object.assign({}, state, {
        portfolio: action.portfolio,
        year: action.year,
        previousFund: numeral(action.previousFund).format('0,0'),
        currentFund: numeral(action.currentFund).format('0,0'),
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
      console.log('Enter increment year')
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
    } else if (action.type === RESTART_LEVEL_1_REQUEST) {
      return Object.assign({}, state, {
        loading: true
      });
    } else if (action.type === RESTART_LEVEL_1_SUCCESS) {
      return Object.assign({}, state, {
        loading: false,
        year: action.year,
        previousFund: action.previousFund,
        currentFund: action.currentFund,
        riskChoice: null,
        portfolio: null,
        risk: null,
        error: null
      });
    } else if (action.type === RESTART_LEVEL_1_ERROR) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    }

    return state;
}
  
export default portfolioReducer;