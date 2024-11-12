import React from 'react';
import { useAtom } from 'jotai';
import { typeKeyCountAtom, typoKeyCountAtom, timerAtom } from '../../../atoms/typingGameAtoms.jsx';

const TypingStats = () => {
    const [typeKeyCount] = useAtom(typeKeyCountAtom);
    const [typoKeyCount] = useAtom(typoKeyCountAtom);
    const [timer] = useAtom(timerAtom);

    const wpm = Math.floor((typeKeyCount - typoKeyCount) / 5 / ((30 - timer) / 60)); // 30秒のハードコーディング
    const accuracy = typeKeyCount > 0 ? Math.floor(((typeKeyCount - typoKeyCount) / typeKeyCount) * 100) : 100;

    return (
        <div>
            <p>WPM: {wpm}</p>
            <p>Accuracy: {accuracy}%</p>
            <p>typeCount: {typeKeyCount} typoCount: {typoKeyCount}</p>
        </div>
    );
};

export default TypingStats;