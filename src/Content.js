import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <main className="Content">
            {items.length ? (
                <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
            ) : (
                <h3>No Items</h3>
            )}

        </main>
    )
}

export default Content;