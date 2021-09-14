import { Router } from "express";
import { getUsuarios } from "../controllers/usuarios.controller";

import { verificar ,isAdmin} from "../middleware/autorizar";

const router = Router();

router.get('/',[verificar,isAdmin],getUsuarios)

export default router;