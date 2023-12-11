import { useEffect, useState } from "react";
import "./App.css";
import "./api/api";
import { getRotaPadrao, postRota } from "./api/api";
import Status from "./class/status";

function App() {
  const [count, setCount] = useState(0);
  
  const [data, setData] = useState(Array<Status>);

  const [post, postData] = useState()

  useEffect(() => {
    getRotaPadrao().then((res) => {
      setData(res);
    });

    
  }, []);

  console.log(data);

  return (
    <>
      <h1>{data.map((res) => { return <ul> <li>{res.id} | {res.nome} | {res.idade}</li></ul>})}</h1>
      
      <button className="but">Its my button</button>
      <button     
        onClick={() => {
          postRota({ numero: count, texto: 'SLA'}).then((res)=> {
            postData(res.data)
            console.log(post);
            
          })
        }}
      >
        click
      </button>
      <button
      onClick={() => {
        setCount(count + 1);
      }}
      >
        ADD
      </button>
    </>
  );
}

export default App;
