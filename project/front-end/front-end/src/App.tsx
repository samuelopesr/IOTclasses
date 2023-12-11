import { useEffect, useState } from "react";
import "./App.css";
import "./api/api";
import { getRotaPadrao, postRota } from "./api/api";
import Status from "./class/status";

function App() {
  const [count, setCount] = useState(0);
  
  const [data, setData] = useState(new Status);

  const [post, postData] = useState()

  useEffect(() => {
    getRotaPadrao().then((res) => {
      setData(res);
    });
  }, []);

  console.log(data);

  return (
    <>
      <h1>{data.status}</h1>
      <h1>{data.array.map((res) => { return <h1>{res}</h1> })}</h1>
      <button className="but">Its my button</button>
      <button     
        onClick={() => {
          postRota({ numero: count, texto: 'SLA'}).then((res: any)=> {
            postData(res)
          })
        }}
      >
        {count}
      </button>

    </>
  );
}

export default App;
