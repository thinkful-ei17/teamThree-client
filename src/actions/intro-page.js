export const SHOW_INTRO_START = 'SHOW_INTRO_START';
export const showIntroStart = (numCard, introCard) => ({
    introCard,
    numCard,
    type: SHOW_INTRO_START
});

export const SHOW_NEXT_INTRO = 'SHOW_NEXT_INTRO ';
export const showNextIntro= (numCard, introCard) => ({
    introCard,
    numCard,
    type: SHOW_NEXT_INTRO
});
