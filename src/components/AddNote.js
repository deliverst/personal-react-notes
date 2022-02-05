import {useState} from 'react'

const AddNote = ({handleAddNote, }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200

    const handleChange = (e) => {
        if (characterLimit - e.target.value.length >= 0)
            setNoteText(e.target.value)

    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        }
    }

    // const handleCharacters = (e) => {
    //     setCounter(e.target.value)
    //     console.log(e.target.value.length)
    // }
    

    return (
        <div className={"note new"}>
            <textarea
                cols="10"
                rows="8"
                placeholder={"Type to add a note..."}
                onChange={handleChange}
                value={noteText}
            />

            <div className="note-footer">
                <small>{characterLimit - noteText.length} Reamining</small>
                <button className={"save"} onClick={handleSaveClick}>Save</button>
            </div>

        </div>
    )
}

export default AddNote