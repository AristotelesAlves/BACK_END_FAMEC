import { Router } from "express";
import { createUserController } from "./controller/createUserController";

const router = Router();

router.post('/user', new createUserController().handle)

export { router }