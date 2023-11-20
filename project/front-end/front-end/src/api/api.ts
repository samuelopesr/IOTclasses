import axios from 'axios'

export async function getRotaPadrao(){
    const data = await axios.get('http://localhost:3001/status')
    return data.data;
}

