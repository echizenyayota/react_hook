import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  // APIから取得したデータ
  const [items, setItems] = useState([]);
  // input に入力した値
  const [inputValue, setInputValue] = useState("React");
  // 外部 APIにリクエストするときに付与するクエリパラメータ
  const [query, setQuery] = useState(inputValue);
  // ローディング状態
  const [isLoading, setIsLoading] = useState(false);

  // 外部APIからデータを取得し、stateを更新する副作用
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );

      setItems(result.data.hits);
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setQuery(inputValue);
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">検索</button>
      </form>
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
