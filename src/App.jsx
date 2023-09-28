import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button 
          data-testid="lorenzo"
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <input value={value} onChange={(ev) => setValue(ev.target.value)} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
