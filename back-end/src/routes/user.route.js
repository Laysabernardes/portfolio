import {Router} from "express";
import {createUser, findAllUser, updateUser} from "../controllers/user.controller.js";
import{validId} from "../middlewares/global.middlewares.js";
import{authMiddleware} from "../middlewares/global.middlewares.js"

const router = Router(); 

router.post("/", createUser);
router.get("/", authMiddleware,findAllUser);
router.patch("/:id",authMiddleware, validId , updateUser);

export default router;
