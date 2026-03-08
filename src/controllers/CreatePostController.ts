import { Request, Response } from "express"
import { getManager } from "typeorm"
import { PostRepository } from "../repositories/PostRepository"
import { CreatePostService } from "../services/CreatePostService"

export class CreatePostController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const { author, content } = request.body

    const manager = getManager()
    const repository = new PostRepository(manager)
    const service = new CreatePostService(repository)

    const post = await service.execute({ author, content })

    return response.status(201).json(post)
  }
}