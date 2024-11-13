import React, {useEffect} from 'react';
import {useAtom} from 'jotai';
import {accurateKeyCount, inaccurateKeyCount, wpmAtom, accuracyAtom, playTimeAtom} from '../../../atoms/typingGameAtoms.jsx';
import dayjs from "dayjs";

const PostRecord = () => {
    const [typeKeyCount] = useAtom(accurateKeyCount);
    const [typoKeyCount] = useAtom(inaccurateKeyCount);
    const [playTime] = useAtom(playTimeAtom);
    const [wpm] = useAtom(wpmAtom);
    const [accuracy] = useAtom(accuracyAtom);

    useEffect(() => {

    }, [])

};

export default PostRecord;