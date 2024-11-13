import {useAtom} from "jotai";
import {currentComponentAtom,} from "./atoms/globalAtoms.jsx";
import Home from "./features/Home/components/Home.jsx";
import TypingGame from "./features/typingGame/components/TypingGame.jsx";
import Record from "./features/records/components/Record.jsx";
import AllRecords from "./features/records/components/AllRecords.jsx";
import Countdown from "./features/typingGame/components/Countdown.jsx";

function App() {
    const [currentComponent, setCurrentComponent] = useAtom(currentComponentAtom);

    const renderComponent = () => {
        switch (currentComponent) {
            case 'Home':
                return <Home/>;
            case 'Countdown':
                return <Countdown onCountdownComplete={setCurrentComponent}/>;
            case 'TypingGame':
                return <TypingGame/>;
            case 'Record':
                return <Record/>;
            case 'AllRecords':
                return <AllRecords/>;
        }
    }

    return (
        <main>
            {renderComponent()}
        </main>
    )
}

export default App;