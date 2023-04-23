import { Router } from "express";
import { getUserController } from "./controller/getUserController";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { createUserController } from "./controller/createUserController";

const router = Router();

router.get('/users', new getUserController().handle)

router.post('/authenticate', new AuthenticateUserController().handle)

router.post('/user', new createUserController().handle)


export { router }