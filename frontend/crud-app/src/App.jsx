import { useState } from "react";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const addItem = (item) => {
    setItems([...items, { id: Date.now(), ...item }]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id) => {
    const itemToEdit = items.find(item => item.id === id);
    setEditingItem(itemToEdit);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    setEditingItem(null); // Reset after update
  };

  return (
    <div>
      <h1>CRUD App Demo</h1>
      <AddItem addItem={addItem} updateItem={updateItem} editingItem={editingItem} />
      <ItemList items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default App;
