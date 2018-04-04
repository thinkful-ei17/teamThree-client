import { API_BASE_URL } from '../config';

export const FETCH_RISK_MARKET_REQUEST = 'FETCH_RISK_MARKET_REQUEST';
export const fetchRiskMarketRequest = () => ({
  type: FETCH_RISK_MARKET_REQUEST
});

export const FETCH_RISK_MARKET_SUCCESS = 'FETCH_RISK_MARKET_SUCCESS';
export const fetchRiskMarketSuccess = marketData => ({
  type: FETCH_RISK_MARKET_SUCCESS,
  marketData
});

export const FETCH_RISK_MARKET_ERROR = 'FETCH_RISK_MARKET_ERROR';
export const fetchRiskMarketError = error => ({
  type: FETCH_RISK_MARKET_ERROR,
  error
});

export const fetchRiskMarket = risk => (dispatch, getState) => {
    dispatch(fetchRiskMarketRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/risk/market/all`, 
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
        .then(data => {
            dispatch(fetchRiskMarketSuccess(data))
        })
        .catch(err => 
            dispatch(fetchRiskMarketError(err))
        )
}