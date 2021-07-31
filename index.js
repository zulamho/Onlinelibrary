const express = require("express")
const mongoose  = require("mongoose")

const app = express()

const PORT = 3000;

app.use(express.json())
app.use(requiere(""))

mongoose.connect("",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    
}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(" Сервер запущен!")
    })
})