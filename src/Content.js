import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    const [items, setItems] = useState([
        { id: 1, checked: false, item: "Milk" },
        { id: 2, checked: false, item: "Bread" },
        { id: 3, checked: false, item: "Eggs" },
    ]);

    return (
        <main className="Content">
            <h2>Items:</h2>
            <div className="Item-Container">
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <input type="checkbox" checked={item.checked} />
                            <label>{item.item}</label>
                            <i className="fa-trash"><FaTrashAlt role="button" tabIndex="0" /></i>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Content;