import {MdOutlineDeleteForever} from "react-icons/md";

const Note = ({id, text, date, handleDeleteNote}) => {

    return (
        <div className="note" key={id}>
            {/*{console.log(id)}*/}
            <span>{text}</span>
            <div className="note-footer">
                <span>{date}</span>
                <MdOutlineDeleteForever onClick={() => handleDeleteNote(id)} className={'delete-icon'} size={'1.3em'}/>
            </div>
        </div>
    )
}

export default Note