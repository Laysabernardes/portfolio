import {Router} from "express";
const router = Router();

import{create, findAll, Category, updateProjects } from "../controllers/projects.controller.js";

router.post("/" ,create);
router.get("/", findAll);
router.get("/:category", Category);
router.patch("/:id", updateProjects);
//router.delete("/:name", deleteTechnologies);

export default router;