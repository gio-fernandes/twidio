import { PostRepository } from "../repositories/PostRepository"

export class DeletePostService {
  constructor(private repository: PostRepository) {}

  async execute(id: string): Promise<void> {
    await this.repository.deleteById(id)
  }
}