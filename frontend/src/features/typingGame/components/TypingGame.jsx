import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import pokemon from 'pokemon';
import {
    currentWordAtom,
    inputWordAtom,
    typeKeyCountAtom,
    typoKeyCountAtom,
    timerAtom,
    isGameRunningAtom
} from '../../../atoms/typingGameAtoms.jsx';
import useDisableSpaceScroll from '../hooks/useDisableSpaceScroll.js';
import Timer from './Timer.jsx';
import TypingStats from './TypingStats.jsx';
import WordHighlight from './WordHighlight.jsx';
import '../styles/Typing.css';

const TypingGame = () => {
    const [currentWord, setCurrentWord] = useAtom(currentWordAtom);
    const [inputWord, setInputWord] = useAtom(inputWordAtom);
    const [typeKeyCount, setTypeKeyCount] = useAtom(typeKeyCountAtom);
    const [typoKeyCount, setTypoKeyCount] = useAtom(typoKeyCountAtom);
    const [timer, setTimer] = useAtom(timerAtom);
    const [isGameRunning, setIsGameRunning] = useAtom(isGameRunningAtom);

    useDisableSpaceScroll();

    useEffect(() => {
        if (isGameRunning) {
            const handleKeydown = (e) => {
                const key = e.key;
                setTypeKeyCount((count) => count + 1);

                if (currentWord.startsWith(inputWord + key)) {
                    setInputWord((word) => word + key);
                    if (inputWord + key === currentWord) {
                        setCurrentWord(pokemon.random().toLowerCase());
                        setInputWord('');
                    }
                } else {
                    setTypoKeyCount((count) => count + 1);
                }
            };

            window.addEventListener('keydown', handleKeydown);
            return () => window.removeEventListener('keydown', handleKeydown);
        }
    }, [isGameRunning, currentWord, inputWord]);

    const startGame = () => {
        setIsGameRunning(true);
        setTimer(30);
        setTypeKeyCount(0);
        setTypoKeyCount(0);
        setCurrentWord(pokemon.random().toLowerCase());
        setInputWord('');
    };

    return (
        <div>
            <h1>Typing Game</h1>
            <Timer />
            <TypingStats />
            <WordHighlight />
            {isGameRunning ? (
                <p>Keep typing...</p>
            ) : (
                <button onClick={startGame}>Start Game</button>
            )}
        </div>
    );
};

export default TypingGame;