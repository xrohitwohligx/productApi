require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000
const connectDB = require("./db/conn")

const products_routes = require("./routes/products");
const {getAllProducts, getAllProductsTesting} = require("../API@22/routes/products")

app.use("/api/products", products_routes);

app.get("/", (req, res)=>{
    res.send("hello welcome to new API");
})

const start = async()=>{
    try{
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, ()=>{
        console.log(`connected to port ${PORT}`);
    })
    }catch(e){
    console.log("not connected",e);
    }   
}
start();
