import {Router} from "express";
const router = Router();

import{create, findAll, Category, updateProjects, deleteProjects } from "../controllers/projects.controller.js";

router.post("/" ,create);
router.get("/", findAll);
router.get("/:category", Category);
router.patch("/:id", updateProjects);
router.delete("/:id", deleteProjects);

export default router;