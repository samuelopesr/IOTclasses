import express, { Router } from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

const HOSTNAME =  "http://localhost";
const PORT = process.env.PORT || 3001;

const router = Router();

app.get("/status", (req, res) => {
  res.json({
    status: "ativo",
    array: ['OPA', 'NICE', 'LEGAL']
  });
});

app.post('/teste', async (req, res) => {

  console.log(req.body);
  
  res.send(`ok`)
  
})

app.listen(PORT, () => {
  console.log(`server running: ${HOSTNAME}:${PORT}/status`);
});
