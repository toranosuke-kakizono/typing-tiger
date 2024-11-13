import pokemon from "pokemon";
import {
    currentWordAtom,
    inputWordAtom,
    accurateKeyCount,
    inaccurateKeyCount,
    isCountdownAtom
} from '../../../atoms/typingGameAtoms.jsx';
import { useSetAtom } from "jotai";

const useStartGame = () => {
    const setIsCountdownActive = useSetAtom(isCountdownAtom);
    const setAccurateKeyPressCount = useSetAtom(accurateKeyCount);
    const setInaccurateKeyPressCount = useSetAtom(inaccurateKeyCount);
    const setCurrentTargetWord = useSetAtom(currentWordAtom);
    const setUserInputWord = useSetAtom(inputWordAtom);

    return () => {
        setIsCountdownActive(false);
        setAccurateKeyPressCount(0);
        setInaccurateKeyPressCount(0);
        setCurrentTargetWord(pokemon.random().toLowerCase());
        setUserInputWord('');
    };
};

export default useStartGame;