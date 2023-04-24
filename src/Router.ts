import { Router } from "express";
import { getUserController } from "./controller/getUserController";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { createUserController } from "./controller/createUserController";
import { AdmCreateController } from "./controller/AdmCreateController";
import { getAdmController } from "./controller/getAdmController";
import { deleteUserController } from "./controller/deleteUserController";

const router = Router();

router.get('/users', new getUserController().handle)

router.post('/authenticate', new AuthenticateUserController().handle)

router.post('/adm', new AdmCreateController().handle)

router.get('/adms', new getAdmController().handle)

router.post('/user', new createUserController().handle)

router.delete('/clear', new deleteUserController().handle)


export { router }