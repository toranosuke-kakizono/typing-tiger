import { atom } from 'jotai'
import './App.css'
import Menu from "./menu/Menu";
import Typing from "./typing/Typing";
import Record from "./score/Record.jsx";
import AllRecords from "./score/AllRecords";

export const allRecordsAtom = atom([]);
export const recordAtom = atom({})
export const bestAtom = atom({});
export const loginUserAtom = atom(5);

function App() {

  return (
    <>
      <Menu/>
      <Typing/>
      <Record/>
      <AllRecords/>
    </>
  )
}

export default App
