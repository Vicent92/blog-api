import { z } from 'zod'

const postBodySchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    category: z.string().min(1),
    tags: z.array(z.string()).min(1),
})

export const validatePost = (postBody) => {
    return postBodySchema.safeParse(postBody);
}

export const partialValidatePost = (postBody) => {
    return postBodySchema.partial().safeParse(postBody);
}