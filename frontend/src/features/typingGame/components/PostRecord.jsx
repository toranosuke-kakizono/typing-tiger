// import React, {useEffect} from 'react';
// import {useAtom} from 'jotai';
// import {accurateKeyCount, inaccurateKeyCount, wpmAtom, accuracyAtom, playTimeAtom} from '../../../atoms/typingGameAtoms.jsx';
// import dayjs from "dayjs";
//
// const PostRecord = () => {
//     const [typeKeyCount] = useAtom(accurateKeyCount);
//     const [typoKeyCount] = useAtom(inaccurateKeyCount);
//     const [playTime] = useAtom(playTimeAtom);
//     const [wpm] = useAtom(wpmAtom);
//     const [accuracy] = useAtom(accuracyAtom);
//
//     useEffect(() => {
//
//     }, [])
//
// };
//
// export default PostRecord;


// 実装中
import React, {useEffect} from 'react';
import {useAtom} from 'jotai';
import {
    accurateKeyCount,
    inaccurateKeyCount,
    wpmAtom,
    accuracyAtom,
    playTimeAtom
} from '../../../atoms/typingGameAtoms.jsx';
import {loginUserAtom} from '../../../atoms/globalAtoms.jsx';

const FetchRecord = () => {
    const [typeKeyCount] = useAtom(accurateKeyCount);
    const [typoKeyCount] = useAtom(inaccurateKeyCount);
    const [playTime] = useAtom(playTimeAtom);
    const [wpm] = useAtom(wpmAtom);
    const [accuracy] = useAtom(accuracyAtom);
    const [userId] = useAtom(loginUserAtom);

    useEffect(() => {
        const fetchRecord = async () => {
            try {
                const requestBody = {
                    room_id: "cceb6342-3c51-44d5-993e-5f04b2c78c0a", // 必要に応じて値を変更
                    user_id: userId,
                    word_count: 199,
                    seconds: 209,
                    accurate_word_count: accurateKeyCount,
                    inaccurate_word_count: inaccurateKeyCount,
                    accuracy: accuracyAtom,
                    wpm: wpmAtom,
                    timestamp: "2024-10-04T05:21:21.335Z"
                };

                const response = await fetch('http://localhost:3000/api/records/createRecord', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // サーバーが JSON を受け取るときはこのヘッダーが必要
                    },
                    body: JSON.stringify(requestBody), // JSON形式の文字列に変換して送信
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch record');
                }

                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching the record:', error);
            }
        };

        fetchRecord();
    }, []);

    return <div>Fetching Record...</div>;
};

export default FetchRecord;