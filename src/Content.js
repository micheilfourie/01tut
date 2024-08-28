import ItemList from './ItemList';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

const Content = ({ items, handleCheck, handleDelete, newItem, setNewItem, handleSubmit, search, setSearch }) => {
    return (
        <main className="Content">
            <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
            <SearchItem search={search} setSearch={setSearch} />
            {items.length ? (
                <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
            ) : (
                <h3>No Items</h3>
            )}

        </main>
    )
}

export default Content;