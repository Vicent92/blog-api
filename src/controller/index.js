import { ModelPost } from "../model/index.js";
import { validatePost, partialValidatePost } from '../schemas/index.js'

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

    static async findById(req, res) {
        const { id } = req.params
        // console.log('index', id)

        const post = await ModelPost.findById(id);

        if (post === 404) {
            res.status(404).json({ error: "Post not found" })
        }

        res.status(200).json(post)
    }

    static async updatePost(req, res) {
        const { id } = req.params
        const { body } = req

        const postValidate = partialValidatePost(body);

        if (!postValidate.success) {
            res.status(400).json({ error: JSON.parse(postValidate.error.message) })
        }

        const post = await ModelPost.updatePost(id, body)

        res.status(200).json(post)
    }
}