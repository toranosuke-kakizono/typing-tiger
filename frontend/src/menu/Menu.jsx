import AllRecords from "../record/AllRecords.jsx";
import {isTypingScreenAtom} from "../globalAtoms.jsx";
import {useAtom} from "jotai";
import Typing from "../typing/Typing.jsx";

function Menu() {
    const [isTypingScreen, setIsTypingScreen] = useAtom(isTypingScreenAtom);

    return (
        isTypingScreen ? <Typing/> :
            <>
                <h1>Tiger Typing</h1>
                <button onClick={() => setIsTypingScreen(true)}>start game</button>
                <AllRecords/>
            </>
    )
}

export default Menu;