import {Router} from "express";
const router = Router();

import{create, findAll} from "../controllers/projects.controller.js";

router.post("/" ,create);
router.get("/", findAll);
//router.get("/:id", findById);
//router.get("/categoria/:category", findByCategory);
//router.get("/search", searchByTitle);
//router.patch("/:id", updateTechnologies);
//router.delete("/:name", deleteTechnologies);

export default router;