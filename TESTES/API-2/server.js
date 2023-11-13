const express = require('express')
const data = require("./data.json")
const app = express()
 
//Resource - Obj, entidade, dados relacionados a ele
//verbos HTTP - para criar a comunicação

//GET: Recebe dados desse resource

//POST: Envia dados ou informações para serem processados por um resource

//PUT: Atualiza os dados do resource

//DELETE: Apaga um Resource

//localhost:300/client <-- nome do  resource (end-point)

app.use(express.json())

app.get("/client/:id", function(req, res){
    const { id } = req.params;

    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(404).json("burro, burro");

    res.json(client);
})

app.get("/client", function(req, res){
    res.json(data)
})

app.post("/client", function(req, res){
    const { nome, email } = req.body

    //save
    res.json({ nome, email })
})

app.put("/client/:id", function(req, res){

    const { id } = req.params
    const client = data.find(cli => cli.id == id)

    if(!client) return res.status(204).json("burro, burro")

    const { name } = req.body
    const { email } = req.body

    client.name = name
    client.email = email

    res.json(client)
})

app.delete("/client/:id", function(req, res){

    const { id } = req.params
    const filterClients = data.filter(client => client.id != id)   
    
    res.json(filterClients)
})

app.listen(3000, function()
{
    console.log("server running");
})