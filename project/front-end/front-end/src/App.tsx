import { useEffect, useState } from "react";
import "./App.css";
import "./api/api";
import { getRotaPadrao } from "./api/api";
function App() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState({
    status: "",
  });

  useEffect(() => {
    getRotaPadrao().then((res) => {
      setData(res);
    });
  }, []);

  // console.log(data.status);

  return (
    <>
      <h1>{data.status}</h1>
      <button className="but">Its my button</button>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        {count}
      </button>
    </>
  );
}

export default App;
