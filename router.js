import {Router} from "express";
import PostController from "./PostController.js";

const router = new Router()
const postController = new PostController()

router.post('/posts',postController.create)
router.get('/posts', postController.getAll)
router.get('/posts/:id', postController.getOne)
router.put('/posts', postController.update)
router.delete('/posts/:id', postController.delete)

export default router
