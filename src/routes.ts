import { Router } from "express"
import { MessageController } from "./controllers/MessageController"
import { GetAllPostController } from "./controllers/GetAllPostController"
import { GetPostsByAuthorController } from "./controllers/GetPostsByAuthorController"
import { DeletePostController } from "./controllers/DeletePostController"
import { CreatePostController } from "./controllers/CreatePostController"

const router = Router()

const messageController = new MessageController()
const getAllPostController = new GetAllPostController()
const getPostsByAuthorController = new GetPostsByAuthorController()
const deletePostController = new DeletePostController()
const createPostController = new CreatePostController()

router.get("/", messageController.handle)
router.post("/posts", createPostController.handle)
router.get("/posts", getAllPostController.handle)
router.get("/posts/author/:author", getPostsByAuthorController.handle)
router.delete("/posts/:id", deletePostController.handle)

export { router }
