import { Router } from "express";
import { CategoryController } from "../controllers/categoryController.mjs";

const categoryController = new CategoryController();
const categoryRouter = Router();

categoryRouter.get("/", categoryController.index);
categoryRouter.get("/:id", categoryController.show);

categoryRouter.post("/", categoryController.create);
categoryRouter.post("/:id", categoryController.update);

export default categoryRouter;
