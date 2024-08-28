import LineItem from './LineItem';

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <div className="Item-Container">
            <ul>
                {items.map((item) => (
                    <LineItem key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete} />
                ))}
            </ul>
        </div>
    )
}

export default ItemList
