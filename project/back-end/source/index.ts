import express from 'express'
import cors from 'cors'

 const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

 const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
 const PORT = process.env.PORT || 3001

 app.get('/status', (req, res)=>{
        res.json({status: 'ativo'})   
    })

 app.listen(PORT, () => { console.log(`server running: ${HOSTNAME} in ${PORT}`);
 })