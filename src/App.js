import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState([{ name: "きのこ" }]);

  const addItem = () => {
    const newItem = {
      name: Math.random() > 0.5 ? "きのこ" : "たけのこ"
    };
    setItems([...items, newItem]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <>
      <button onClick={addItem}>「きのこ」か「たけのこ」かを追加」</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => deleteItem(index)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}
