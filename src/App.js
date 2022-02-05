import {useState} from 'react'
import {nanoid} from 'nanoid'
import NotesList from "./components/NotesList";

const App = () => {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "Naruto es lo mejor",
            date: "11/23/2002"
        },
        {
            id: nanoid(),
            text: "Quiero ver dragon Ball",
            date: "22/23/2022"
        },
        {
            id: nanoid(),
            text: "Este es la nota de Pokemon",
            date: "12/23/2022"
        }
    ]);

    return (
        <div className="container">
            <NotesList notes={notes}/>
        </div>
    );
};

export default App