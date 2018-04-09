import { API_BASE_URL } from '../config';


export const SHOW_INTRO_CARD = 'SHOW_INTRO_CARD';
export const showIntroCard = (numCard, introCard) => ({
    introCard,
    numCard,
    type: SHOW_INTRO_CARD
});

export const NEXT_INTRO_CARD = 'NEXT_INTRO_CARD';
export const nextIntroCard = (numCard, introCard) => ({
    introCard,
    numCard,
    type: NEXT_INTRO_CARD
});



export const INTRO_COMPLETE_REQUEST = 'INTRO_COMPLETE_REQUEST';
export const introCompleteRequest = () => ({
    type: INTRO_COMPLETE_REQUEST
});

export const INTRO_COMPLETE_SUCCESS = 'INTRO_COMPLETE_SUCCESS';
export const introCompleteSuccess = () => ({
    type: INTRO_COMPLETE_SUCCESS
});

export const INTRO_COMPLETE_ERROR = 'INTRO_COMPLETE_ERROR';
export const introCompleteError = err => ({
    type: INTRO_COMPLETE_ERROR,
    err,
});


//==== This call records that the User has completed the Introduction slides ===============

export const introComplete = () => (dispatch, getState) => {
    dispatch(introCompleteRequest());
    const authToken = getState().auth.authToken;
    const data = ({
        intro: true
    });
    return fetch(`${API_BASE_URL}/risk/intro`,
        {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${authToken}`
        }
    })
    .then(res => {
        if(!res.ok){
            return Promise.reject('Something went wrong with setting intro to true');
        }
        return res.json();
    })
    .then( (res) => 
        dispatch(introCompleteSuccess())
    )
    .catch(err =>
        dispatch(introCompleteError(err))
    );
}


