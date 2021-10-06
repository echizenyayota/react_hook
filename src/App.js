import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  // APIから取得したデータ
  const [items, setItems] = useState([]);
  // ローディング状態
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://hn.algolia.com/api/v1/search?query=react";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios.get(url);

      setItems(result.data.hits);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
