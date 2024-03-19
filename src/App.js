import React, { useState } from "react";
import axios from "axios";
import Words from "./components/Words";
import './App.css'

function App() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  async function handleSearch() {
    try {
      const res = await axios.get(`${api}/${keyword}`);
      console.log(res, "res");
      setResult(res.data[0]);
    } catch (e) {
      console.log({ e });
    }
  }
  function handleClear() {
    setKeyword("");
    setResult(null);
  }

  return (
    <div className="App">
      <div className="App__header">
        <h1>English Dictionary</h1>
      </div>
      <div className="App__main">
        <input className="App__main__input" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <div className="App__main__input__buttons">
          <button
            className="App__main__input__submit"
            type="submit"
            onClick={handleSearch}
            value="search"
          >
            Search
          </button>
          <button
            disabled={!result}
            className="App__main__input__clear"
            type="submit"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="App__main__result">
        {result && <Words {...{ result }} />}
      </div>
    </div >
  );
}

export default App;