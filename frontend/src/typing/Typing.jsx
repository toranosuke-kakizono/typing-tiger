import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import './Typing.css';
import pokemon from 'pokemon';
import {
    typingLoadingAtom,
    currentWordAtom,
    inputWordAtom,
    typeWordsCountAtom,
    typoWordsCountAtom,
    typeKeyCountAtom,
    typoKeyCountAtom,
    secondsAtom,
    timerAtom,
    isGameRunningAtom
} from '../globalAtoms.jsx';

const TypingGame = () => {
    const [typingLoading, setTypingLoading] = useAtom(typingLoadingAtom);
    const [currentWord, setCurrentWord] = useAtom(currentWordAtom);
    const [inputWord, setInputWord] = useAtom(inputWordAtom);
    const [typeWordsCount, setTypeWordsCount] = useAtom(typeWordsCountAtom);
    const [typoWordsCount, setTypoWordsCount] = useAtom(typoWordsCountAtom);
    const [typeKeyCount, setTypeKeyCount] = useAtom(typeKeyCountAtom);
    const [typoKeyCount, setTypoKeyCount] = useAtom(typoKeyCountAtom);
    const [seconds, setSeconds] = useAtom(secondsAtom);
    const [timer, setTimer] = useAtom(timerAtom);
    const [isGameRunning, setIsGameRunning] = useAtom(isGameRunningAtom);

    useEffect(() => {
        if (isGameRunning && timer > 0) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (timer === 0) {
            setIsGameRunning(false);
        }
    }, [isGameRunning, timer]);

    useEffect(() => {
        if (isGameRunning) {
            const handleKeydown = (e) => {
                const key = e.key;
                setTypeKeyCount(count => count + 1);

                if (currentWord.startsWith(inputWord + key)) {
                    setInputWord(word => word + key); //

                    if (inputWord + key === currentWord) {
                        setTypeWordsCount(prevScore => prevScore + 1);
                        setCurrentWord(pokemon.random().toLowerCase());
                        setInputWord('');
                    }
                } else {
                    setTypoKeyCount(count => count + 1);
                    setTypoWordsCount(count => count + 1);
                }
            };

            window.addEventListener('keydown', handleKeydown);
            return () => window.removeEventListener('keydown', handleKeydown);
        }
    }, [isGameRunning, currentWord, inputWord]);

    const startGame = () => {
        setIsGameRunning(true);
        setTimer(30);
        setTypeWordsCount(0);
        setTypoWordsCount(0);
        setTypeKeyCount(0);
        setTypoKeyCount(0);
        setCurrentWord(pokemon.random().toLowerCase());
        setInputWord('');
    };

    const renderHighlightedWord = () => {
        let correctPart = '';
        let incorrectPart = '';

        for (let i = 0; i < inputWord.length; i++) {
            if (inputWord[i] === currentWord[i]) {
                correctPart += currentWord[i];
            } else {
                incorrectPart = inputWord.slice(i);
                break;
            }
        }

        return (
            <span>
                <span className="correct">{correctPart}</span>
                <span className="incorrect">{incorrectPart}</span>
                <span>{currentWord.slice(inputWord.length)}</span>
            </span>
        );
    };

    return (
        <div>
            <h1>Typing Game</h1>
            <p>Time: {timer}s</p>
            <p>WPM: {Math.floor((typeWordsCount / (30 - timer)) * 60)}</p>
            <p>Accuracy: {typeKeyCount > 0 ? Math.floor(((typeKeyCount - typoKeyCount) / typeKeyCount) * 100) : 100}%</p>
            <p>Type this word: {renderHighlightedWord()}</p>
            {isGameRunning ? (
                <p>Keep typing...</p>
            ) : (
                <button onClick={startGame}>Start Game</button>
            )}
        </div>
    );
};

export default TypingGame;