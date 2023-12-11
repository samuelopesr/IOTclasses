import express, { Router } from "express";
import mysql from 'mysql2';
import cors from "cors";
import { log } from "console";
const app = express();

app.use(express.json());
app.use(cors());

const HOSTNAME =  "http://localhost";
const PORT = process.env.PORT || 3001;

const router = Router();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'fundacao'
});


// connection.query("SELECT * FROM Pessoa", function(err, result, field)
// {
//   console.log(result);
//   console.log(field);
  
  
// }
// )

app.get("/status",async (req, res) => {

  const result = await connection.promise().query("SELECT * FROM Pessoa")
  res.send(result[0])
});

app.post('/teste', async (req, res) => {

  console.log(req.body);
  
  res.send(`ok`)
  
})

app.listen(PORT, () => {
  console.log(`server running: ${HOSTNAME}:${PORT}/status`);
});
