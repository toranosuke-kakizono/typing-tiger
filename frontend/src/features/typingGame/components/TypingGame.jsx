// ライブラリ
import React, { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import pokemon from 'pokemon';

// コンポーネント
import Timer from './Timer.jsx';
import TypingStats from './TypingStats.jsx';
import WordHighlight from './WordHighlight.jsx';
import Countdown from './Countdown.jsx';

// グローバルステート(Atom)
import {
    currentWordAtom,
    inputWordAtom,
    typeKeyCountAtom,
    typoKeyCountAtom,
    timerAtom,
    isGameRunningAtom,
    isCountdownAtom,
} from '../../../atoms/typingGameAtoms.jsx';

// その他
import useDisableSpaceScroll from '../hooks/useDisableSpaceScroll.js';
import '../styles/Typing.css';


const TypingGame = () => {
    const [currentTargetWord, setCurrentTargetWord] = useAtom(currentWordAtom);
    const [userInputWord, setUserInputWord] = useAtom(inputWordAtom);
    const [correctKeyPressCount, setCorrectKeyPressCount] = useAtom(typeKeyCountAtom);
    const [incorrectKeyPressCount, setIncorrectKeyPressCount] = useAtom(typoKeyCountAtom);
    const remainingTime = useAtomValue(timerAtom); // ここでは値の読み取りだけなのでuseAtomValue
    const isGameActive = useAtomValue(isGameRunningAtom); // 値の読み取りだけなのでuseAtomValue
    const [isCountdownActive, setIsCountdownActive] = useAtom(isCountdownAtom);

    useDisableSpaceScroll();

    useEffect(() => {
        if (isGameActive) {
            const handleKeydown = (e) => {
                const key = e.key;
                setCorrectKeyPressCount((count) => count + 1);

                if (currentTargetWord.startsWith(userInputWord + key)) {
                    setUserInputWord((word) => word + key);
                    if (userInputWord + key === currentTargetWord) {
                        setCurrentTargetWord(pokemon.random().toLowerCase());
                        setUserInputWord('');
                    }
                } else {
                    setIncorrectKeyPressCount((count) => count + 1);
                }
            };

            window.addEventListener('keydown', handleKeydown);
            return () => window.removeEventListener('keydown', handleKeydown);
        }
    }, [isGameActive, currentTargetWord, userInputWord]);

    const startGame = () => {
        setIsCountdownActive(false);
        setCorrectKeyPressCount(0);
        setIncorrectKeyPressCount(0);
        setCurrentTargetWord(pokemon.random().toLowerCase());
        setUserInputWord('');
    };

    return (
        isCountdownActive ? (
            <Countdown onCountdownComplete={startGame} />
        ) : (
            <div>
                <h1>Typing Game</h1>
                <Timer />
                <TypingStats />
                <WordHighlight />
                {isGameActive ? (
                    <p>Keep typing...</p>
                ) : (
                    <button onClick={startCountdown}>Start Game</button>
                )}
            </div>
        )
    );
};

export default TypingGame;