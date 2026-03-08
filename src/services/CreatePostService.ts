import { PostRepository } from "../repositories/PostRepository"

interface IRequest {
  author: string
  content: string
}

export class CreatePostService {
  constructor(private repository: PostRepository) {}

  async execute({ author, content }: IRequest) {
    const post = await this.repository.create({
      author,
      content
    })

    return post
  }
}