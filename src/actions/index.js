export const PLAY_SOUND = 'PLAY_SOUND';
export const playSound = id => ({ type: PLAY_SOUND, id });
export const PLAY_NOTE = 'PLAY_NOTE';
export const playNote = ids => ({ type: PLAY_NOTE, ids });
