import { PostRepository } from "../repositories/PostRepository"

export class GetPostsByAuthorService {
  constructor(private repository: PostRepository) {}

  async execute(author: string) {
    const posts = await this.repository.findByAuthor(author)
    return posts
  }
}
