import React, {useEffect} from "react";
import {atom, useAtom, useAtomValue} from "jotai";
import {loginUserAtom, currentComponentAtom} from "../../../atoms/globalAtoms.jsx";
import {allRecordsAtom, bestRecordAtom} from "../../../atoms/recordAtoms.jsx";
import dayjs from 'dayjs';
import "../styles/AllRecords.css";

const loadingAtom = atom(true);

function AllRecords() {
    const loginUserId = useAtomValue(loginUserAtom);
    const [currentComponent, setCurrentComponent] = useAtom(currentComponentAtom);
    const [loading, setLoading] = useAtom(loadingAtom);
    const [allRecords, setAllRecords] = useAtom(allRecordsAtom);
    const [bestRecord, setBestRecord] = useAtom(bestRecordAtom);

    useEffect(() => {
        async function fetchData() {
            try {
                const recordsResponse = await fetch(`http://localhost:3000/api/records/${loginUserId}`);
                const records = await recordsResponse.json();
                setAllRecords(records);

                const bestRecordResponse = await fetch(`http://localhost:3000/api/records/best/${loginUserId}`);
                const bestRecord = await bestRecordResponse.json();
                setBestRecord(bestRecord);

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [setAllRecords, setLoading, setBestRecord]);


    // 表示したい要素の配列を定義
    const displayRecords = allRecords.map(record => {
        return <tr key={record.id}>
            <td>{record.wpm}</td>
            <td>{record.accuracy}%</td>
            <td>{record.accurate_key_count} key</td>
            <td>{record.inaccurate_key_count} key</td>
            <td>{dayjs(record.timestamp).format('YYYY/MM/DD HH:mm')}</td>
        </tr>
    })

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <button onClick={() => setCurrentComponent('Home')}>Home</button>
            <h3>自己ベスト</h3>
            <table>
                <thead>
                <tr>
                    <th>wpm</th>
                    <th>acc</th>
                    <th>accurate✅</th>
                    <th>inaccurate❌</th>
                    <th>timestamp</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>{bestRecord.wpm}</th>
                    <th>{bestRecord.accuracy}%</th>
                    <td>{bestRecord.accurate_key_count} key</td>
                    <td>{bestRecord.inaccurate_key_count} key</td>
                    <th>{dayjs(bestRecord.timestamp).format('YYYY/MM/DD HH:mm')}</th>
                </tr>
                </tbody>
            </table>
            <h3>日々の記録</h3>
            <table>
                <thead>
                <tr>
                    <th>wpm</th>
                    <th>acc</th>
                    <th>accurate✅</th>
                    <th>inaccurate❌</th>
                    <th>timestamp</th>
                </tr>
                </thead>
                <tbody>
                {displayRecords}
                </tbody>
            </table>
        </>
    )
}

export default AllRecords;