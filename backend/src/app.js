/*Ïmportamos al framework exprres*/
import express from "express";
import categoriaRouter from "./routes/categorias.routes.js"
import cors from "cors"

const app=express();
/*asignamos a pp toda la funcionalidad para mi sever web*/

/*seterar un puerto a mi web server */
app.set("port",5000)
app.use(cors());
/*routes */
app.use("/api/categorias",categoriaRouter);
app.use(express.json());

/*hacemos dispobinle a mis erver app para toda la aplicación */
export default app;

