import { Router } from "express"
import { GetAllPostController } from "./controllers/GetAllPostController"
import { MessageController } from "./controllers/MessageController"
import { GetPostsByAuthorController } from "./controllers/GetPostsByAuthorController"

const router = Router()

const messageController = new MessageController()
const getAllPostController = new GetAllPostController()
const getPostsByAuthorController = new GetPostsByAuthorController()

router.get("/", messageController.handle)
router.get("/posts", getAllPostController.handle)
router.get("/posts/author/:author", getPostsByAuthorController.handle)

export { router }