import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { timerAtom, isGameRunningAtom } from '../../../atoms/typingGameAtoms.jsx';
import {currentComponentAtom,} from "../../../atoms/globalAtoms.jsx";

const Timer = () => {
    const [timer, setTimer] = useAtom(timerAtom);
    const [isGameRunning, setIsGameRunning] = useAtom(isGameRunningAtom);
    const [currentComponent, setCurrentComponent] = useAtom(currentComponentAtom);

    useEffect(() => {
        if (isGameRunning && timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (timer === 0) {
            setIsGameRunning(false);
            setCurrentComponent('Record');
        }
    }, [isGameRunning, timer]);

    return <p>Time: {timer}s</p>;
};

export default Timer;