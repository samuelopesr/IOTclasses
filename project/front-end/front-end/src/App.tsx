import { useEffect, useState } from 'react'
import './App.css'
import  './api/api'
import { getRotaPadrao } from './api/api';
function App() {

  const [count, setCount] = useState(0)

  const [data,setData] = useState<any>();

  useEffect(()=>{

    getRotaPadrao().then((res)=>{
      
      setData(res);

    });
  },[]);
  
  console.log(data);
  
  return (
    <>
      <div>
        <h1>
       status -- {data.status}
        </h1>
        <p>Esse é o status da minha aplicação</p>
      </div>
      <button className='but'>
        Its my button
      </button>
      <button onClick={() => {
        setCount(count + 1)
        console.log(count);
        
      }} >
        {count}
      </button>
      
    </>
  )
}

export default App



