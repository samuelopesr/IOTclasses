import { useEffect, useState } from "react";
import "./App.css";
import "./api/api";
import { getRotaPadrao } from "./api/api";
import Status from "./class/status";

function App() {
  const [count, setCount] = useState(0);
  const [msg, Mesage] = useState('carregando')
  
  const [data, setData] = useState(new Status);

  useEffect(() => {
    getRotaPadrao().then((res) => {
      setData(res);
      const texto = data.status
      const array = data.array
      Mesage(texto)
    
      
      // console.log(data.status);
    });
  }, []);

  console.log(data);

  return (
    <>
    <h1>{msg}</h1>
      <h1>{data.status}</h1>
      <h1>{data.array.map((res) => { return <h1>{res}</h1> })}</h1>
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
