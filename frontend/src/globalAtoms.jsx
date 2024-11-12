import { atom } from 'jotai'

// 共通のステート
export const loginUserAtom = atom(2);

// 画面遷移
export const isMenuScreenAtom = atom(true);
export const isRecordScreenAtom = atom(false);
export const isAllRecordScreenAtom = atom(false);
export const isTypingScreenAtom = atom(false);

// Recordコンポーネントで使用
export const allRecordsAtom = atom([]);
export const recordAtom = atom({})
export const bestRecordAtom = atom({});

// タイピングで使用
export const currentWordAtom = atom('');
export const inputWordAtom = atom('');
export const typeKeyCountAtom = atom(0);
export const typoKeyCountAtom = atom(0);
export const secondsAtom = atom(30);
export const timerAtom = atom(30);
export const isGameRunningAtom = atom(false);