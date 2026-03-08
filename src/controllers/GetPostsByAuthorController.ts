import { Request, Response } from "express"
import { getManager } from "typeorm"
import { PostRepository } from "../repositories/PostRepository"
import { GetPostsByAuthorService } from "../services/GetPostsByAuthorService"

export class GetPostsByAuthorController {
  handle = async (req: Request, res: Response): Promise<Response> => {
    const { author } = req.params

    const manager = getManager()
    const repository = new PostRepository(manager)
    const service = new GetPostsByAuthorService(repository)

    const posts = await service.execute(author)

    return res.status(200).json(posts)
  }
}