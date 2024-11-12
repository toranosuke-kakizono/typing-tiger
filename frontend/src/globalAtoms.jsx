import { atom } from 'jotai'

// 共通のステート
export const loginUserAtom = atom(2);

// レコードで使用
export const allRecordsAtom = atom([]);
export const recordAtom = atom({})
export const bestRecordAtom = atom({});

// タイピングで使用
export const typingLoadingAtom = atom(true);
export const currentWordAtom = atom('');
export const inputWordAtom = atom('');
export const typeWordsCountAtom = atom(0);
export const typoWordsCountAtom = atom(0);
export const typeKeyCountAtom = atom(0);
export const typoKeyCountAtom = atom(0);
export const secondsAtom = atom(30);
export const timerAtom = atom(30);
export const isGameRunningAtom = atom(false);