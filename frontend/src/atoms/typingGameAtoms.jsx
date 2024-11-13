import { atom } from 'jotai'

export const currentWordAtom = atom('');
export const inputWordAtom = atom('');
export const typeKeyCountAtom = atom(0);
export const typoKeyCountAtom = atom(0);
export const secondsAtom = atom(30);
export const timerAtom = atom(30);
export const isGameRunningAtom = atom(false);
export const isCountdownAtom = atom(false);