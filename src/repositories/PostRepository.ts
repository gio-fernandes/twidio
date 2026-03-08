import { EntityRepository, EntityManager } from 'typeorm'
import { Post } from '../entities/Post'

@EntityRepository(Post)
export class PostRepository {
    private manager: EntityManager;

    constructor (manager: EntityManager) {
      this.manager = manager
    }

    getAll = async (): Promise<Array<Post>> => {
  const posts: Post[] = await this.manager.find(Post)
  return posts
}

create = async ({ author, content }: { author: string; content: string }) => {
  const post = this.manager.create(Post, {
    author,
    content
  })

  await this.manager.save(post)

  return post
}

findByAuthor = async (author: string): Promise<Array<Post>> => {
  const posts: Post[] = await this.manager.find(Post, {
    where: { author }
  })
  return posts
}

deleteById = async (id: string): Promise<void> => {
  await this.manager.delete(Post, { post_id: id })
}
}

