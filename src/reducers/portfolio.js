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
    PROCEED_TO_LVL2_ERROR,
    PROCEED_TO_LVL2_REQUEST,
    PROCEED_TO_LVL2_SUCCESS,
    INVEST_FUNDS_LVL2_ERROR,
    INVEST_FUNDS_LVL2_REQUEST,
    INVEST_FUNDS_LVL2_SUCCESS,
    UPDATE_INVESTMENT_STRATEGY,
    BLANK_INVESTMENT_STRATEGY_ENTRY,
    RESTART_LEVEL_1_REQUEST,
    RESTART_LEVEL_1_SUCCESS,
    RESTART_LEVEL_1_ERROR, 
    INCREMENT_YEAR 
} from '../actions/portfolio';

  const initialState = {
  year: 0,
  previousFund: null,
  currentFund: 5000,
  riskChoice: null,
  portfolio: null,
  risks: null,
  year5Amt: null,
  unassigned: 100,
  aggressive: 0,
  moderate: 0,
  conservative: 0,
  mattress: 0,
  google: 0,
  autoZone: 0,
  dollarTree: 0,
  ea: 0,
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
        year5Amt: action.year5Amt,
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
    } else if (action.type === PROCEED_TO_LVL2_REQUEST) {
      return Object.assign({}, state, {
        loading: true
      });
    } else if (action.type === PROCEED_TO_LVL2_SUCCESS) {
      return Object.assign({}, state, {
        year5Amt: action.year5Amt,
        risks: null,
        loading: false,
        error: null
      });
    } else if (action.type === PROCEED_TO_LVL2_ERROR) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    } else if (action.type === INVEST_FUNDS_LVL2_REQUEST) {
      return Object.assign({}, state, {
        loading: true
      });
    } else if (action.type === INVEST_FUNDS_LVL2_SUCCESS) {
      return Object.assign({}, state, {
        loading: false,
        error: null,
        unassigned: initialState.unassigned, 
        aggressive: initialState.aggressive, 
        moderate: initialState.moderate, 
        conservative: initialState.conservative, 
        mattress: initialState.mattress,
        google: initialState.google, 
        autoZone: initialState.autoZone,
        dollarTree: initialState.dollarTree, 
        ea: initialState.ea
      });
    } else if (action.type === INVEST_FUNDS_LVL2_ERROR) {
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
    } else if (action.type === UPDATE_INVESTMENT_STRATEGY) {
      let originalValue = parseInt(state[action.strategy], 10)
      if (isNaN(originalValue)) {
        originalValue = 0;
      }
      return Object.assign({}, state, {
        unassigned: state.unassigned + originalValue - action.riskAmount,
        [action.strategy]: action.riskAmount
      });
    } else if (action.type === BLANK_INVESTMENT_STRATEGY_ENTRY) {
      return Object.assign({}, state, {
        unassigned: state.unassigned + parseInt(state[action.strategy], 10),
        [action.strategy]: ''
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
        risks: null,
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