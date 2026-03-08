import { Request, Response } from "express"
import { GetPostsByAuthorController } from "./GetPostsByAuthorController"

jest.mock("typeorm", () => ({
  getManager: jest.fn()
}))

jest.mock("../repositories/PostRepository", () => {
  return {
    PostRepository: jest.fn().mockImplementation(() => ({}))
  }
})

jest.mock("../services/GetPostsByAuthorService", () => {
  return {
    GetPostsByAuthorService: jest.fn().mockImplementation(() => ({
      execute: jest.fn().mockResolvedValue([
        { id: 1, author: "Gio", message: "Meu primeiro post" }
      ])
    }))
  }
})

describe("GetPostsByAuthorController", () => {
  it("should return status 200 and posts by author", async () => {
    const controller = new GetPostsByAuthorController()

    const req = {
      params: {
        author: "Gio"
      }
    } as unknown as Request

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response

    await controller.handle(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith([
      { id: 1, author: "Gio", message: "Meu primeiro post" }
    ])
  })
})
