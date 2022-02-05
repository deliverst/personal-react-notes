import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return (<div className="notes-list">
        {notes.map((notes) => (
            <Note
                key={notes.id}
                text={notes.text}
                date={notes.date}
                handleDeleteNote={handleDeleteNote}
                maxlength="5"/>
        ))}
            <AddNote handleAddNote={handleAddNote}/>
    </div>
)
}

export default NotesList