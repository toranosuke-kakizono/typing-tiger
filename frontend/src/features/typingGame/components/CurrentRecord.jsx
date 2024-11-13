import { useAtom } from 'jotai';
import { wpmAtom, accuracyAtom } from '../../../atoms/typingGameAtoms.jsx';

const CurrentRecord = () => {

    const [wpm] = useAtom(wpmAtom);
    const [accuracy] = useAtom(accuracyAtom);

    return (
        <>
        <p>WPM: {isNaN(wpm) ? '' : wpm}</p>
        <p>Accuracy: {accuracy} %</p>
        </>
    );
};

export default CurrentRecord;