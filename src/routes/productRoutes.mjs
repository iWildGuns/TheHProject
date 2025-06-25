import { Router } from "express";
import { ProductController } from "../controllers/productController.mjs";

const productController = new ProductController();
const Productrouter = Router();

Productrouter.get("/", productController.index);
Productrouter.get("/:id", productController.show);

export default Productrouter;
