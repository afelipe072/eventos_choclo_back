import { Router } from "express";
import {createCompra, getCompras} from '../controllers/compra.controller'

const router = Router();

router.get('/',getCompras)

router.post('/',createCompra)



export default router