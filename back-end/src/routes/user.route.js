import {Router} from "express";
import {createUser, findAllUser, findById, updateUser} from "../controllers/user.controller.js";
import{validId} from "../middlewares/global.middlewares.js";
import{authMiddleware} from "../middlewares/global.middlewares.js"

const router = Router(); 

router.post("/", createUser);
router.get("/", authMiddleware,findAllUser);
router.get("/:id",findById);
router.patch("/:id", validId,authMiddleware, updateUser);

export default router;
