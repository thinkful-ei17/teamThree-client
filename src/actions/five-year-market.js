import { API_BASE_URL } from '../config';

export const FETCH_RISK_MARKET_REQUEST = 'FETCH_RISK_MARKET_REQUEST';
export const fetchRiskMarketRequest = () => ({
  type: FETCH_RISK_MARKET_REQUEST
});

export const FETCH_RISK_MARKET_SUCCESS = 'FETCH_RISK_MARKET_SUCCESS';
export const fetchRiskMarketSuccess = data => ({
  type: FETCH_RISK_MARKET_SUCCESS,
  data
});

export const FETCH_RISK_MARKET_ERROR = 'FETCH_RISK_MARKET_ERROR';
export const fetchRiskMarketError = error => ({
  type: FETCH_RISK_MARKET_ERROR,
  error
});

export const fetchRiskMarket = () => (dispatch, getState) => {
    dispatch(fetchRiskMarketRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/risk/all/market`, 
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

export const FETCH_LVL2_RISK_MARKET_REQUEST = 'FETCH_LVL2_RISK_MARKET_REQUEST';
export const fetchLvl2RiskMarketRequest = () => ({
  type: FETCH_LVL2_RISK_MARKET_REQUEST
});

export const FETCH_LVL2_RISK_MARKET_SUCCESS = 'FETCH_LVL2_RISK_MARKET_SUCCESS';
export const fetchLvl2RiskMarketSuccess = data => ({
  type: FETCH_LVL2_RISK_MARKET_SUCCESS,
  data
});

export const FETCH_LVL2_RISK_MARKET_ERROR = 'FETCH_LVL2_RISK_MARKET_ERROR';
export const fetchLvl2RiskMarketError = error => ({
  type: FETCH_LVL2_RISK_MARKET_ERROR,
  error
});

export const fetchLvl2RiskMarket = year5Amt => (dispatch, getState) => {
    dispatch(fetchLvl2RiskMarketRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/level2/all/${year5Amt}`, 
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
            dispatch(fetchLvl2RiskMarketSuccess(data))
        })
        .catch(err => 
            dispatch(fetchLvl2RiskMarketError(err))
        )
}