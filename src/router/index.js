import express from 'express'
import { ControllerPost } from '../controller/index.js'

const router = express.Router()

router.get('/', ControllerPost.getAll)
router.post('/', ControllerPost.createPost)

export { router }