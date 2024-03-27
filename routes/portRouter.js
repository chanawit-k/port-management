import { Router } from 'express'
const router = Router()

import { createPort, getAllPort } from '../controllers/portController.js'

router.route('/').post(createPort).get(getAllPort)

export default router
