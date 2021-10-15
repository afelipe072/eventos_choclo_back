import { Router } from "express";
import { getUsuarios,getOneUsuario, deleteUsuario, updateUsuario } from "../controllers/usuarios.controller";

import { verificar ,isAdmin} from "../middleware/autorizar";

const router = Router();

router.get('/',getUsuarios)
router.get('/:id',getOneUsuario)
router.delete('/:id',deleteUsuario)
router.put('/:id',updateUsuario)


export default router;