import { Router } from "express";

import {singUp}  from '../controllers/auth.controller'
import {longIn}  from '../controllers/auth.controller'

const router = Router();

router.post('/singup',singUp)
router.post('/login',longIn)

export default router;