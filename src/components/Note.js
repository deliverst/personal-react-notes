import {MdOutlineDeleteForever} from "react-icons/md";

const Note = ({id, text, date}) => {
    return (
        <div className="note" key={id}>
            <span>{text}</span>
            <div className="note-footer">
                <span>{date}</span>
                <MdOutlineDeleteForever className={'delete-icon'} size={'1.3em'}/>
            </div>
        </div>
    )
}

export default Note