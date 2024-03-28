import { Router } from 'express'

import {
  createPort,
  getAllPort,
  deletePort,
} from '../controllers/portController.js'
import { validateIdParam } from '../middleware/validationMiddleware.js'

const router = Router()

router.route('/').post(createPort).get(getAllPort)
router.route('/:id').delete(validateIdParam, deletePort)

export default router
