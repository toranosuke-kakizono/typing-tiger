import pokemon from "pokemon";
import {
    currentWordAtom,
    inputWordAtom,
    typeKeyCountAtom,
    typoKeyCountAtom,
    isCountdownAtom
} from '../../../atoms/typingGameAtoms.jsx';
import { useSetAtom } from "jotai";

const useStartGame = () => {
    const setIsCountdownActive = useSetAtom(isCountdownAtom);
    const setCorrectKeyPressCount = useSetAtom(typeKeyCountAtom);
    const setIncorrectKeyPressCount = useSetAtom(typoKeyCountAtom);
    const setCurrentTargetWord = useSetAtom(currentWordAtom);
    const setUserInputWord = useSetAtom(inputWordAtom);

    return () => {
        setIsCountdownActive(false);
        setCorrectKeyPressCount(0);
        setIncorrectKeyPressCount(0);
        setCurrentTargetWord(pokemon.random().toLowerCase());
        setUserInputWord('');
    };
};

export default useStartGame;