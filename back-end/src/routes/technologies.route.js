import {Router} from "express";
import { createTechnology, findAllTechnology, findByNameTechnology, findByCategoryTechnology, updateTechnology, deleteTechnology } from "../controllers/technologies.controller.js";
import{validId} from "../middlewares/global.middlewares.js";

const router = Router(); 

router.post("/", createTechnology);
router.get("/", findAllTechnology);
router.get("/:name", findByNameTechnology);
router.get("/categoria/:category", findByCategoryTechnology);
router.patch("/:id", validId, updateTechnology);
router.delete("/:name", deleteTechnology);

export default router;