import { useState, useEffect } from "react";

function AddItem({ addItem, updateItem, editingItem }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  useEffect(() => {
    if (editingItem) {
      setFormData(editingItem);
    }
  }, [editingItem]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.email) return;

    if (editingItem) {
      updateItem(formData);
    } else {
      addItem(formData);
    }

    setFormData({ name: "", age: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
      <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Enter age" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
      <button type="submit">{editingItem ? "Update" : "Add"}</button>
    </form>
  );
}

export default AddItem;
