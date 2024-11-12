import React, {useEffect} from "react";
import {atom, useAtom, useAtomValue} from "jotai";
import {recordAtom, loginUserAtom} from "../globalAtoms.jsx";
import dayjs from 'dayjs';
import './Record.css'

const loadingAtom = atom(true);

function records() {
    const [loading, setLoading] = useAtom(loadingAtom);
    const [record, setRecord] = useAtom(recordAtom);
    const loginUserId = useAtomValue(loginUserAtom);

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
        <h3>スコア</h3>
        <table>
            <thead>
            <tr>
                <th>wpm</th>
                <th>acc</th>
                <th>timestamp</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{record.wpm}</td>
                <td>{record.accuracy}%</td>
                <td>{dayjs(record.timestamp).format('YYYY/MM/DD HH:mm')}</td>
            </tr>
            </tbody>
        </table>
    </>)
}

export default records;