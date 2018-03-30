import { API_BASE_URL } from '../config';

export const CHOOSE_RISK_TOLERANCE = 'CHOOSE_RISK_TOLERANCE';
export const chooseRiskTolerance = riskChoice => ({
  type: CHOOSE_RISK_TOLERANCE,
  riskChoice
});

export const FETCH_PORTFOLIO_REQUEST = 'FETCH_PORTFOLIO_REQUEST';
export const fetchPortfolioRequest = () => ({
  type: FETCH_PORTFOLIO_REQUEST
});

export const FETCH_PORTFOLIO_SUCCESS = 'FETCH_PORTFOLIO_SUCCESS';
export const fetchPortfolioSuccess = portfolio => ({
  type: FETCH_PORTFOLIO_SUCCESS,
  portfolio
});

export const FETCH_PORTFOLIO_ERROR = 'FETCH_PORTFOLIO_ERROR';
export const fetchPortfolioError = error => ({
  type: FETCH_PORTFOLIO_ERROR,
  error
});

export const fetchPortfolio = () => (dispatch, getState) => {
    dispatch(fetchPortfolioRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/self`, 
    {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${authToken}`
        }
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject('Something has gone wrong');
            }
            return res.json()
        })
        .then(user => {
            dispatch(fetchPortfolioSuccess(user))
        })
        .catch(err => 
            dispatch(fetchPortfolioError(err))
        )
    }