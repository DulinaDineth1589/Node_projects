function ItemList({ items, deleteItem, editItem }) {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>Name:</strong> {item.name}, <strong>Age:</strong> {item.age}, <strong>Email:</strong> {item.email}
            <button onClick={() => editItem(item.id)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ItemList;
  