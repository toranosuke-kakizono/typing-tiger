import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { isGameRunningAtom, playTimeAtom } from '../../../atoms/typingGameAtoms.jsx';
import {currentComponentAtom,} from "../../../atoms/globalAtoms.jsx";

const Timer = () => {
    const [isGameRunning, setIsGameRunning] = useAtom(isGameRunningAtom);
    const [currentComponent, setCurrentComponent] = useAtom(currentComponentAtom);
    const [playTime, setPlayTime] = useAtom(playTimeAtom);

    useEffect(() => {
        if (isGameRunning && playTime > 0) {
            const interval = setInterval(() => {
                setPlayTime((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (playTime === 0) {
            setIsGameRunning(false);
            setCurrentComponent('Record');
        }
    }, [isGameRunning, playTime]);

    return <p>Time: {playTime}s</p>;
};

export default Timer;