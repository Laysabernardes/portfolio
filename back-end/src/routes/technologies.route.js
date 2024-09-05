import {Router} from "express";
import { create, findAll, findByName, findByCategory, updateTechnologies, deleteTechnologies } from "../controllers/technologies.controller.js";

const router = Router(); 

router.post("/", create);
router.get("/", findAll);
router.get("/:name", findByName);
router.get("/categoria/:category", findByCategory);
router.patch("/:id", updateTechnologies);
router.delete("/:name", deleteTechnologies);

export default router;