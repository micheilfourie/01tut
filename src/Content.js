import { useState } from "react";

const Content = () => {
    const [name, setName] = useState("Bob");
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ["Bob", "Kevin", "Dave"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleClick = () => {
        handleNameChange();
        setCount(count + 1);
    }

    return (
        <main className="Content">
            <p>Hello {name}!</p>
            <button className="Button" onClick={handleClick}>Change Name</button>
            <p>You clicked {count} times</p>
        </main>
    )
}

export default Content;