import { Router } from "express";

const routerCart = Router();

routerCart.get("/", (req, res) => {
  // Cuerpo del servicio GET de carts
})

routerCart.post("/", (req, res) => {
  // Cuerpo del servicio POST de carts
})

routerCart.put("/", (req, res) => {
  // Cuerpo del servicio PUT de carts
})

routerCart.delete("/", (req, res) => {
  // Cuerpo del servicio DELETE de carts
})

export default routerCart;