import { Router } from "express";
import { getUserController } from "./controller/getUserController";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { createUserController } from "./controller/createUserController";

const router = Router();

router.get('/user', new getUserController().handle)

router.post('/authenticate', new AuthenticateUserController().handle)

router.post('/createUser', new createUserController().handle)


export { router }