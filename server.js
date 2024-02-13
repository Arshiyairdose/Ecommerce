import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRout.js"
import categoryRoutes from "./routes/categoryRoute.js"
import productRoutes from "./routes/productRoutes.js"
import cors from "cors"
import path, { dirname } from "path"

//configure env
dotenv.config()
//database config
connectDB()
const app=express()


//middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname,"./client/build")))
//routes

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/category",categoryRoutes)
app.use("/api/v1/product", productRoutes);
// app.use(express.static(path.join(--dirname,"./client/build")))

//rest API
app.use('*',function(req,res){
res.sendFile(path.join(__dirname,"./client/build/index.html"))
})


// app.get("/", (req, res) => {
//     res.send("<h1>Welcome to ecommerce app</h1>");
//   });
  
//PORT
const PORT =process.env.PORT || 8080

//app listen
app.listen(PORT,()=>{
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
})
















