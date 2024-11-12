import React, {useEffect} from 'react';
import {useAtom} from 'jotai';
import './Typing.css';
import './wordHighlight.css';
import pokemon from 'pokemon';
import {
    currentWordAtom,
    inputWordAtom,
    typeKeyCountAtom,
    typoKeyCountAtom,
    secondsAtom,
    timerAtom,
    isGameRunningAtom
} from '../globalAtoms.jsx';

const TypingGame = () => {
    const [currentWord, setCurrentWord] = useAtom(currentWordAtom);
    const [inputWord, setInputWord] = useAtom(inputWordAtom);
    const [typeKeyCount, setTypeKeyCount] = useAtom(typeKeyCountAtom);
    const [typoKeyCount, setTypoKeyCount] = useAtom(typoKeyCountAtom);
    const [seconds, setSeconds] = useAtom(secondsAtom);
    const [timer, setTimer] = useAtom(timerAtom);
    const [isGameRunning, setIsGameRunning] = useAtom(isGameRunningAtom);

    // スペースキーによる画面スクロールを無効化
    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.code === 'Space' || event.key === ' ') {
                event.preventDefault();
            }
        };

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, []);

    // タイマーのカウントダウン
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

    // キーが押された時にカウントする
    useEffect(() => {
        if (isGameRunning) {
            const handleKeydown = (e) => {
                const key = e.key;
                setTypeKeyCount(count => count + 1);

                // 入力中の文字を更新
                if (currentWord.startsWith(inputWord + key)) {
                    setInputWord(word => word + key);

                    // 入力文字と一致したら単語を作成し、入力欄をリセット
                    if (inputWord + key === currentWord) {
                        setCurrentWord(pokemon.random().toLowerCase());
                        setInputWord('');
                    }
                } else {
                    // ここではタイポをカウント
                    setTypoKeyCount(count => count + 1);
                }
            };

            window.addEventListener('keydown', handleKeydown);
            return () => window.removeEventListener('keydown', handleKeydown);
        }
    }, [isGameRunning, currentWord, inputWord]);

    // ゲーム開始時のステート初期化
    const startGame = () => {
        setIsGameRunning(true);
        setTimer(30);
        setSeconds(30);
        setTypeKeyCount(0);
        setTypoKeyCount(0);
        setCurrentWord(pokemon.random().toLowerCase());
        setInputWord('');
    };

    // 文章を3つに切り分けてCSSクラスを付与する
    const wordHighlight = () => {
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

    return (
            <div>
                <h1>Typing Game</h1>
                <p>Time: {timer}s</p>
                <p>typeCount: {typeKeyCount} typoCount: {typoKeyCount}</p>
                <p>WPM: {Math.floor((typeKeyCount - typoKeyCount) / 5 / ((30 - timer) / 60))}</p>
                <p>Accuracy: {typeKeyCount > 0 ? Math.floor(((typeKeyCount - typoKeyCount) / typeKeyCount) * 100) : 100}%</p>
                <p>{wordHighlight()}</p>
                {isGameRunning ? (
                    <p>Keep typing...</p>
                ) : (
                    <button onClick={startGame}>Start Game</button>
                )}
            </div>
    );
};

export default TypingGame;