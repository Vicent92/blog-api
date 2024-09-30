import { randomUUID } from 'node:crypto'

const data = []

export class ModelPost {

    static async getAll() {
        return data
    }

    static async createPost(postBody) {
        const newPost = {
            ...postBody,
            id: randomUUID(),
            createdAt: Date.now()
        }

        data.push(newPost)

        return data
    }

    static async findById(id) {
        const idPost = data.findIndex(el => el.id === id)
        // console.log('index', idPost)
        if (idPost === -1) {
            return 404
        }

        const post = data?.[idPost]

        return post
    }

    static async updatePost(id, body) {
        const idPost = data.findIndex(el => el.id === id)

        if (idPost === -1) {
            return 404
        }

        data[idPost] = {
            ...data?.[idPost],
            ...body
        }

        const post = data?.[idPost]

        return post
    }
}