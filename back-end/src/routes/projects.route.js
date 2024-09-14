import {Router} from "express";
const router = Router();

import{create, findAll, Category, updateProjects, deleteProjects } from "../controllers/projects.controller.js";
import{authMiddleware} from "../middlewares/global.middlewares.js"

router.post("/" ,authMiddleware,create);
router.get("/", findAll);
router.get("/:category", Category);
router.patch("/:id", authMiddleware, updateProjects);
router.delete("/:id", authMiddleware, deleteProjects);

export default router;