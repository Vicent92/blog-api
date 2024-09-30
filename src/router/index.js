import express from 'express'
import { ControllerPost } from '../controller/index.js'

const router = express.Router()

router.get('/', ControllerPost.getAll)
router.post('/', ControllerPost.createPost)
router.get('/:id', ControllerPost.findById)
router.put('/:id', ControllerPost.updatePost)

export { router }