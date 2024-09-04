import {Router} from "express";
const router = Router();

import{create, findAll, findById} from "../controllers/projects.controller.js";
import{validId, validUser} from "../middlewares/global.middlewares.js";

router.post("/" ,create);
router.get("/", findAll);
router.get("/:id", findById);
router.get("/search", searchByTitle);

export default router;