import React, {useEffect} from 'react';
import {useAtom} from "jotai";
import './Typing.css';
import words from 'word-list-json';
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
} from '../globalAtoms.jsx'

const randomWordMaker = () => {
    return words[Math.floor(Math.random() * words.length)];
}

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

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputWord(value);

        if (value === currentWord) {
            setTypeWordsCount(prevScore => prevScore + 1);
            setCurrentWord(pokemon.random().toLowerCase());
            setInputWord('');
        }
    };

    const startGame = () => {
        setIsGameRunning(true);
        setTimer(30);
        setTypeWordsCount(0);
        setCurrentWord(pokemon.random().toLowerCase());
        setInputWord('');
    };

    return (
        <div>
            <h1>Typing Game</h1>
            <p>Time: {timer}s</p>
            <p>WPM: {Math.floor(typeWordsCount / seconds) * 100}</p>
            <p>accuracy: {Math.floor(((typeWordsCount - typoWordsCount) / typeWordsCount) * 100)}</p>
            <p>Type: {currentWord}</p>
            {isGameRunning ? (
                <input
                    type="text"
                    value={inputWord}
                    onChange={handleInputChange}
                    autoFocus
                />
            ) : (
                <button onClick={startGame}>Start Game</button>
            )}
        </div>
    );
};

export default TypingGame;

