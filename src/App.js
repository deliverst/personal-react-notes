import {useState} from 'react'
import {nanoid} from 'nanoid'
import NotesList from "./components/NotesList";
import Search from "./components/Search";

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
        },
    ]);

    const [searchText,setSearchText] = useState('')

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== "LuVZEE2gALv0hNYhDMqTd")
        setNotes(newNotes)
    }



    return (
        <div className="container">
            <Search handleSearchText={setSearchText}/>
            <NotesList
                notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText) )}
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}
            />
        </div>
    );
};

export default App