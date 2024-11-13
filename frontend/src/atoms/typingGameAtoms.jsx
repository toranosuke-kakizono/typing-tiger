import { atom } from 'jotai'

export const currentWordAtom = atom('');
export const inputWordAtom = atom('');
export const wpmAtom = atom(0);
export const accuracyAtom = atom(0);
export const accurateKeyCount = atom(0);
export const inaccurateKeyCount = atom(0);
export const secondsAtom = atom(30);
export const timerAtom = atom(30);
export const isGameRunningAtom = atom(false);
export const isCountdownAtom = atom(false);
export const playTimeAtom　= atom(30);
