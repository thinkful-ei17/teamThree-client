import {
  SHOW_INTRO_CARD,
  NEXT_INTRO_CARD,
  HIDE_INTRO_CARD
} from "../actions/intro";

const initialState = {
  introCard: [
    {number: 0, title: 'So You Want to Be An Investor...', detailA: 'There are a couple of things you should know about to get started.', detailC:'Stocks & Bonds'},
    {number: 1, title: 'Stocks', detailA: 'A stock represents ownership or rights to a portion of a company\'s assets and profits.', detailC:'You are a shareholder.'},
    {number: 2, title: 'Bonds', detailA: 'A bond represents you lending money to a company or government body for a specific amount and specific period of time.', detailB:'The amount of money you lend will be returned to you with interest.', detailC:'You are a debtholder.'},
    {number: 3, title: 'Managed Fund', detailA: 'A managed fund is managed professionally by an expert. The professional decides the  type and mix of investments in the fund.', detailB: 'You choose to pool your money with other investors so you get access to investing opportunities that you may not have as an individual investor and to diversify your risk.', detailC: 'You own units of a fund.'}],
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
  }

  return state;

}

export default introReducer;
