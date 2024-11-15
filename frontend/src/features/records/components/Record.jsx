import React, {useEffect} from "react";
import {atom, useAtom, useAtomValue} from "jotai";
import {loginUserAtom, currentComponentAtom} from "../../../atoms/globalAtoms.jsx";
import {recordAtom} from "../../../atoms/recordAtoms.jsx";
import dayjs from 'dayjs';

const loadingAtom = atom(true);

function records() {
    const [loading, setLoading] = useAtom(loadingAtom);
    const [record, setRecord] = useAtom(recordAtom);
    const loginUserId = useAtomValue(loginUserAtom);
    const [currentComponent, setCurrentComponent] = useAtom(currentComponentAtom);

    useEffect(() => {
        async function fetchData() {
            try {
                const recordResponse = await fetch(`http://localhost:3000/api/records/first/${loginUserId}`);
                const record = await recordResponse.json();
                setRecord(record);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [setRecord, setLoading]);

    if (loading) {
        return <div>Loading...</div>
    }

    return (<>
        <button onClick={() => {
            setCurrentComponent('Home')
        }}>
            Home
        </button>
        <button onClick={() => {
            setCurrentComponent('Countdown')
        }}>
            Game start
        </button>

        <h3>スコア</h3>
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
                <td>{record.wpm}</td>
                <td>{record.accuracy}%</td>
                <td>{record.accurate_key_count} key</td>
                <td>{record.inaccurate_key_count} key</td>
                <td>{dayjs(record.timestamp).format('YYYY/MM/DD HH:mm')}</td>
            </tr>
            </tbody>
        </table>
    </>)
}

export default records;