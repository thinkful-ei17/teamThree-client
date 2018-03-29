import {
    FETCH_PORTFOLIO_REQUEST,
    FETCH_PORTFOLIO_SUCCESS,
    FETCH_PORTFOLIO_ERROR
} from "../actions/portfolio";
  
const initialState = {
    portfolio: null,
    loading: false,
    error: null
};
  
export function portfolioReducer(state = initialState, action) {
    if (action.type === FETCH_PORTFOLIO_REQUEST) {
      return Object.assign({}, state, {
        loading: true
      });
    } else if (action.type === FETCH_PORTFOLIO_SUCCESS) {
      return Object.assign({}, state, {
        portfolio: action.portfolio,
        loading: false,
        error: null
      });
    } else if (action.type === FETCH_PORTFOLIO_REQUEST) {
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    } else {
      return state;
    }
}
  
export default portfolioReducer;