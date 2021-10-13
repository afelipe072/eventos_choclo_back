import { Router } from "express";
import { createEvento, deleteEvento, getEventos, getOneEvento, updateEvento } from "../controllers/eventos.controller";

import { verificar, isAdmin } from "../middleware/autorizar";

const router = Router();

router.get('/',getEventos)
router.get('/:id',getOneEvento)
router.post('/',createEvento)
router.put('/:id',updateEvento)
router.delete('/:id',deleteEvento)



export default router;