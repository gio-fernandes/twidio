import { GetPostsByAuthorService } from "./GetPostsByAuthorService"
import { PostRepository } from "../repositories/PostRepository"

describe("GetPostsByAuthorService", () => {

  it("should return posts from a specific author", async () => {

    const managerMock: any = {
      find: jest.fn().mockResolvedValue([
        { id: 1, author: "Gio", message: "Hello world" }
      ])
    }

    const repository = new PostRepository(managerMock)

    const service = new GetPostsByAuthorService(repository)

    const posts = await service.execute("Gio")

    expect(posts.length).toBe(1)
    expect(posts[0].author).toBe("Gio")

  })

})