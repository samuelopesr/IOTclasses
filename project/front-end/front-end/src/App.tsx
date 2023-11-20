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
        My todoList
        {data}
      </div>
    </>
  )
}

export default App



