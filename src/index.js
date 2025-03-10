const express= require('express')
const app = express()
const port = 3333

app.get('/', (req,res)=>{
    res.send('Hello, World! Sejam Bem Vindos!')
})



app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})