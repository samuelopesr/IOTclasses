import express from 'express'


 const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

 const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
 const PORT = process.env.PORT || 3001

 app.get('client/:status', (req, res)=>{
        res.json('wellCome')
    })

 app.listen(PORT, () => { console.log(`server running: ${HOSTNAME} in ${PORT}`);
 })