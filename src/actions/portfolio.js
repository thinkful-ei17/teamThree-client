import { API_BASE_URL } from '../config';

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
    return fetch(`${API_BASE_URL}/`, 
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
        .then(portfolio => {
            dispatch(fetchPortfolioSuccess(portfolio))
        })
        .catch(err => 
            dispatch(fetchPortfolioError(err))
        )
    }