// ライブラリ
import React, { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import pokemon from 'pokemon';

// コンポーネント
import Timer from './Timer.jsx';
import CurrentRecord from "./CurrentRecord.jsx";
import WordHighlight from './WordHighlight.jsx';
import Countdown from './Countdown.jsx';


// タイピングゲームのステート(Atom)
import {
    currentWordAtom,
    inputWordAtom,
    accurateKeyCount,
    inaccurateKeyCount,
    isGameRunningAtom,
    isCountdownAtom,
    playTimeAtom,
    wpmAtom,
    accuracyAtom,
} from '../../../atoms/typingGameAtoms.jsx';

// その他
import useDisableSpaceScroll from '../hooks/useDisableSpaceScroll.js';
import '../styles/Typing.css';


const TypingGame = () => {
    const [currentTargetWord, setCurrentTargetWord] = useAtom(currentWordAtom);
    const [userInputWord, setUserInputWord] = useAtom(inputWordAtom);
    const [accurateKeyPressCount, setAccurateKeyPressCount] = useAtom(accurateKeyCount);
    const [inaccurateKeyPressCount, setInaccurateKeyPressCount] = useAtom(inaccurateKeyCount);
    const isGameActive = useAtomValue(isGameRunningAtom); // 値の読み取りだけなのでuseAtomValue
    const [isCountdownActive, setIsCountdownActive] = useAtom(isCountdownAtom);
    const [playTime, setPlayTime] = useAtom(playTimeAtom);
    const [wpm, setWpm] = useAtom(wpmAtom);
    const [accuracy, setAccuracy] = useAtom(accuracyAtom);

    useDisableSpaceScroll();

    useEffect(() => {
        if (isGameActive) {
            const handleKeydown = (e) => {
                const key = e.key;
                setAccurateKeyPressCount((count) => count + 1);

                if (currentTargetWord.startsWith(userInputWord + key)) {
                    setUserInputWord((word) => word + key);
                    if (userInputWord + key === currentTargetWord) {
                        setCurrentTargetWord(pokemon.random().toLowerCase());
                        setUserInputWord('');
                    }
                } else {
                    setInaccurateKeyPressCount((count) => count + 1);
                }
            };

            setWpm(Math.floor((accurateKeyPressCount - inaccurateKeyPressCount) / 5 / ((30 - playTime) / 60))); // 30秒のハードコーディング
            setAccuracy(accurateKeyPressCount > 0 ? Math.floor(((accurateKeyPressCount - inaccurateKeyPressCount) / accurateKeyPressCount) * 100) : 100);


            window.addEventListener('keydown', handleKeydown);
            return () => window.removeEventListener('keydown', handleKeydown);
        }
    }, [isGameActive, currentTargetWord, userInputWord]);

    return (
        isCountdownActive ? (
            <Countdown />
        ) : (
            <div>
                <h1>Typing Game</h1>
                <Timer />
                <CurrentRecord />
                <WordHighlight />
            </div>
        )
    );
};

export default TypingGame;