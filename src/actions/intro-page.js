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

export const HIDE_INTRO_CARD = 'HIDE_INTRO_CARD';
export const hideIntroCard = () => ({
    type: HIDE_INTRO_CARD
});

