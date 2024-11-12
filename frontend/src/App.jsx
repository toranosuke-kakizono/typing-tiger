import {useAtom} from "jotai";
import {isTypingScreenAtom} from "./atoms/globalAtoms.jsx";
import AllRecords from "./features/records/components/AllRecords.jsx";
import TypingGame from "./features/typingGame/components/TypingGame.jsx";

function App() {
    const [isTypingScreen, setIsTypingScreen] = useAtom(isTypingScreenAtom);

    return (
        isTypingScreen ? <TypingGame/> :
            <>
                <h1>Tiger Typing</h1>
                <button onClick={() => setIsTypingScreen(true)}>start game</button>
                <AllRecords/>
            </>
    )
}

export default App;