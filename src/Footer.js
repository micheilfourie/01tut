const Footer = ({ length }) => {
    const today = new Date();
    return (
        <footer className="Footer">
            <p>{length} List {length > 1 ? "Items" : "Item"}</p>
        </footer>
    )
}

export default Footer
