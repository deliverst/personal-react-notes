import { MdOutlineDeleteForever } from "react-icons/md";

const Note = () => {
    return(
    <div className="note">
        <span>Hello this is  our first note</span>
        <div className="note-footer">
            <span>13/05/2022</span>
            <MdOutlineDeleteForever className={'delete-icon'} size={'1.3em'} />
        </div>
    </div>
    )
}

export default Note