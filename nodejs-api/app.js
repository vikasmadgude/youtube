const express = require("express")
const cors = require("cors")
const nosondb = require("@tush-tr/nosondb")
const nodb = new nosondb("products.json")
const app = express()


app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Hello, everything is fine")
})

app.get("/products",async(req,res)=>{
    const data = await nodb.getAll();
    res.status(200).json(data)
})

app.post("/products",async(req,res)=>{
    const {name,price} = req.body;
    const createData = await nodb.create({name,price})
    res.status(200).json("Successfully added the data")

})
app.delete("/product/:id",async(req,res)=>{
    const id = req.params.id
    await nodb.delete(id)
    res.status(200).json("Successfully deleted")
})

app.listen(3001,()=>{
    console.log("Server is up and running")
})