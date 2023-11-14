import axios from 'axios'

axios.get('http://localhost:3001/status').then((res) => {
    console.log(res.data);   
})