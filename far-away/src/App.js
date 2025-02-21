import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handlePackItem(id) {
    setItems((item) =>
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackItem={handlePackItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return (
    <header className="header">
      <h1>💼 far away 🚢</h1>
    </header>
  );
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      alert("Please add a description");
      return;
    }
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item name"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onPackItem }) {
  const [sortby, setSortby] = useState("input");
  let sorteditem;
  if (sortby == "input") sorteditem = items;
  if (sortby == "description")
    sorteditem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby == "packed")
    sorteditem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sorteditem.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onPackItem={onPackItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input"> sort by input </option>
          <option value="description"> sort by description </option>
          <option value="packed"> sort by packed </option>
        </select>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onPackItem }) {
  return (
    <div>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onPackItem(item.id)}
      />
      <li>
        <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </div>
  );
}

function Stats({ items }) {
  const totalItems = items.length;
  console.log("total Items:", totalItems);
  const packedItems = items.filter((item) => item.packed).length;
  console.log("packed:", packedItems);
  const percentage = Math.round((packedItems / totalItems) * 100);
  console.log("percentage:", percentage);

  return (
    <footer className="stats">
      <em>
        {totalItems > 0
          ? percentage === 100
            ? "U Got Everything to Go!👍"
            : `You have ${totalItems} items, and you already packed ${packedItems} items (${percentage}%).`
          : "No items to pack!"}
      </em>
    </footer>
  );
}

export default App;
