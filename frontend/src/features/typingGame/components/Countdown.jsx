import {useEffect} from 'react';
import {useAtom} from "jotai";
import {countdownAtom} from "../../../atoms/globalAtoms.jsx";
import {isGameRunningAtom} from "../../../atoms/typingGameAtoms.jsx";
import useStartGame from "../hooks/startCountdown.js";

const Countdown = ({onCountdownComplete}) => {
    const [countdown, setCountdown] = useAtom(countdownAtom);
    const [isGameRunning, setIsGameRunning] = useAtom(isGameRunningAtom);

    const startGame = useStartGame();

    useEffect(() => {
        if (countdown > 0) {
            const interval = setInterval(() => {
                setCountdown(prevCount => prevCount - 1);
            }, 1000);

            return () => clearInterval(interval);　// クリーンアップ
        } else {
            // カウントダウン終了時の処理
            onCountdownComplete('TypingGame');
            setIsGameRunning(true);
            startGame();
        }
    }, [countdown, onCountdownComplete]);

    return (
        <div className="countdown">
            <h1>{countdown}</h1>
        </div>
    );
};

export default Countdown;