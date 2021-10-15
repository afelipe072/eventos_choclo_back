import { Router } from "express";
import { getUsuarios,getOneUsuario, deleteUsuario, updateUsuario } from "../controllers/usuarios.controller";

import { verificar ,isAdmin} from "../middleware/autorizar";

const router = Router();

router.get('/',[verificar,isAdmin],getUsuarios)
router.get('/:id',[verificar],getOneUsuario)
router.delete('/:id',[verificar],deleteUsuario)
router.put('/:id',[verificar],updateUsuario)


export default router;