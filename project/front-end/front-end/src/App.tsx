import { useEffect, useState } from 'react'
import './App.css'
import  './api/api'
import { getRotaPadrao } from './api/api';
function App() {

  
  const [data,setData] = useState<any>();

  useEffect(()=>{

    getRotaPadrao().then((res)=>{
      
      setData(res);

    });
  },[]);
  
  
  return (
    <>
      <div>
        <h1>
       status -- {data.status}
        </h1>
        <p>Esse é o status da minha aplicação</p>
      </div>
    </>
  )
}

export default App



