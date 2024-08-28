import { FaTrashAlt } from "react-icons/fa";

function LineItem({ item, handleCheck, handleDelete }) {
    return (
        <li key={item.id} onDoubleClick={() => { handleCheck(item.id) }}>
            <input onChange={() => { handleCheck(item.id) }} type="checkbox" checked={item.checked} />
            <label>{item.item}</label>
            <i className="fa-trash"><FaTrashAlt onClick={() => { handleDelete(item.id) }} role="button" tabIndex="0" aria-label={`Delete ${item.item}`} /></i>
        </li>
    )
}

export default LineItem
