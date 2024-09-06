import {Router} from "express";
import {createUser, findAllUser, updateUser} from "../controllers/user.controller.js";
import{validId} from "../middlewares/global.middlewares.js";

const router = Router(); 

router.post("/", createUser);
router.get("/", findAllUser);
router.patch("/:id",validId , updateUser);

export default router;