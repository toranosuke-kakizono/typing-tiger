import { atom } from 'jotai'
import './App.css'
import Menu from "./menu/Menu";
import Typing from "./typing/Typing";
import Score from "./score/Score";
import AllScore from "./score/AllScore";

const countAtom = atom(0);

function App() {

  return (
    <>
      <Menu/>
      <Typing/>
      <Score/>
      <AllScore/>
    </>
  )
}

export default App
