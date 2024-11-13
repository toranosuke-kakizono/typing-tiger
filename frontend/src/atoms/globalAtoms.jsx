import { atom } from 'jotai'

// 共通のステート
export const loginUserAtom = atom(2);

// 画面遷移
// export const isRecordScreenAtom = atom(false);
// export const isAllRecordScreenAtom = atom(false);
// export const isTypingScreenAtom = atom(false);
export const countdownAtom = atom(3);
export const currentComponentAtom = atom('Home');
