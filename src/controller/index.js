import { ModelPost } from "../model/index.js";
import { validatePost } from '../schemas/index.js'

export class ControllerPost {
    
    static async getAll(req, res) {
        const data = await ModelPost.getAll()

        res.json({data: data})
    }

    static async createPost(req, res) {
        const { body } = req

        const validateReault = validatePost(body);

        if (!validateReault.success) {
            res.status(400).json({ error: JSON.parse(validateReault.error.message) })
        }

        const resultPost = await ModelPost.createPost(body)

        res.status(201).json(resultPost)
    }
}