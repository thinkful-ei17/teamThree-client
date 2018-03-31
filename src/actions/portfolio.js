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
export const fetchPortfolioSuccess = user => ({
  type: FETCH_PORTFOLIO_SUCCESS,
  year: user.year,
  portfolio: user.risk,
  previousFund: user.previousFund,
  currentFund: user.currentFund
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

export const INVEST_FUNDS_REQUEST = 'INVEST_FUNDS_REQUEST';
export const investFundsRequest = () => ({
  type: INVEST_FUNDS_REQUEST
});

export const INVEST_FUNDS_SUCCESS = 'INVEST_FUNDS_SUCCESS';
export const investFundsSuccess = user => ({
  type: INVEST_FUNDS_SUCCESS,
  year: user.year,
  portfolio: user.risk,
  previousFund: user.previousFund,
  currentFund: user.currentFund
});

export const INVEST_FUNDS_ERROR = 'INVEST_FUNDS_ERROR';
export const investFundsError = error => ({
  type: INVEST_FUNDS_ERROR,
  error
});

export const investFunds = (risk, year, currentFund) => (dispatch, getState) => {
	dispatch(investFundsRequest());
    const authToken = getState().auth.authToken;
    const data = ({
        risk,
        year,
        currentFund
    })
	return fetch(`${API_BASE_URL}/risk/invest`, 
		{
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        		'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${authToken}`
			}
		}).then(res => {
			if (!res.ok) {
				return Promise.reject('Something has gone wrong');
			}
			return res.json()
		})
		.then(user => {
			dispatch(investFundsSuccess(user));
		})
		.catch(err => 
			dispatch(investFundsError(err))
		)
}