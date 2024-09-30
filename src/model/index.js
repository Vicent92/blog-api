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
}