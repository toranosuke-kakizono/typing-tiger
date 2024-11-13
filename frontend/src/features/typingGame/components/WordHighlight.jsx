import React from 'react';
import { useAtom } from 'jotai';
import { currentWordAtom, inputWordAtom } from '../../../atoms/typingGameAtoms.jsx';
import '../styles/wordHighlight.css';

const WordHighlight = () => {
    const [currentWord] = useAtom(currentWordAtom);
    const [inputWord] = useAtom(inputWordAtom);

    const highlightWord = () => {
        let correctPart = '';
        let currentText = '';

        for (let i = 0; i < currentWord.length; i++) {
            if (inputWord[i] === currentWord[i]) {
                correctPart += currentWord[i];
            } else {
                currentText += currentWord[i];
                break;
            }
        }

        return (
            <span>
                <span className="correct">{correctPart}</span>
                <span className="currentText">{currentText}</span>
                <span className="standby">{currentWord.slice(inputWord.length + 1)}</span>
            </span>
        );
    };

    return <p className="highlight">{highlightWord()}</p>;
};

export default WordHighlight;