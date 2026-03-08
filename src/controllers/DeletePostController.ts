import { Request, Response } from "express"
import { getManager } from "typeorm"
import { PostRepository } from "../repositories/PostRepository"
import { DeletePostService } from "../services/DeletePostService"

export class DeletePostController {
  handle = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params

    const manager = getManager()
    const repository = new PostRepository(manager)
    const service = new DeletePostService(repository)

    await service.execute(id)

    return res.status(204).send()
  }
}