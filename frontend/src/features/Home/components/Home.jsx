import {useAtom} from "jotai";
import {currentComponentAtom} from "../../../atoms/globalAtoms.jsx";

function Home() {
    const [currentComponents, setCurrentComponents] = useAtom(currentComponentAtom);

    return (
        <>
            <h1>Tiger Typing</h1>
            <button onClick={() => {
                console.log("clicked");
                setCurrentComponents('Countdown')
            }}>Game start</button>
            <button onClick={() => setCurrentComponents('AllRecords')}>Your records</button>
        </>
    )
}

export default Home;