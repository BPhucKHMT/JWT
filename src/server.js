import express from "express";
import configViewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import bodyParser from 'body-parser'
require("dotenv").config();

import connection from "./config/connectDB.js";

const app = express();

//config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//test connection
connection();

//init web routes
initWebRoutes(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(">>> JWT Backend is running on the port =" + PORT)
});