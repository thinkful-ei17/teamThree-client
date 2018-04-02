import {
  SHOW_INTRO_CARD,
  NEXT_INTRO_CARD,
  HIDE_INTRO_CARD,
} from "../actions/intro-page";

const initialState = {
  introCard: [
    {number: 0, title: 'So You Want to Be An Investor...', details: 'There are a couple of things you should know about to get started.'},
    {number: 1, title: 'Stocks', details: 'A stock represents ownership or rights to a portion of a company\'s assets and profits. You are a shareholder.'},
    {number: 2, title: 'Bonds', details: 'A bond represents you lending money to a company or government body for a specific amount and specific period of time, the amount will be returned to you with interest. You are a debtholder.'},
    {number: 3, title: 'Managed Fund', details: 'A managed fund is managed professionally by an expert. The professional decides the  type and mix of investments in the fund. You choose to pool your money with other investors so you get access to investing opportunities that you may not have as an individual investor and diversify your risk. You own units of a fund'}],
  numCard: 0,
  introComplete: false
};

export function introReducer(state = initialState, action) {
  if (action.type === SHOW_INTRO_CARD) {
    return Object.assign({}, state, {
      introCard: action.introCard,
      numCard: action.numCard,
  });
  }
  else if (action.type === NEXT_INTRO_CARD) {
    return Object.assign({}, state, {
      introCard: action.introCard,
      numCard: action.numCard + 1,
  });
  }
  else if (action.type === HIDE_INTRO_CARD) {
    return Object.assign({}, state, {
      introComplete: true
  }); 
  } else {
    return state;
  }
}

export default introReducer;
