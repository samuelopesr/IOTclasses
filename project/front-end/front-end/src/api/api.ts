import axios from 'axios'

export async function getRotaPadrao(){
    const data = await axios.get('http://localhost:3001/status')
    console.log(data);
    return data.data;
}

