import express, { urlencoded } from "express";

// Importaciones de rutas
import routerProd from "./routes/products.routes.js";

const app = express();
const PORT = 8080;

app.use(express.json());

// ***** Endpoints y server *****

app.use("/api/products", routerProd);

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
})

app.get("/", (req, res) => {
  // ENDPOINT del home (pagina de inicio)
  res.send(`<h1 style="background-color: #49c; text-align: center; margin-top: 50px;">Pagina principal</h1>`)
});