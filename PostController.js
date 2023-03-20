import PostService from "./PostService.js";

const postService = new PostService()

class PostController {
    async create(req, res) {
        try {
            const {author, title, content, picture} = req.body
            const post = await postService.create({author, title, content, picture}, req.files.picture)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await postService.getAll()
            res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            if (!id) return res.status(400).json({message: "Id isn't provided"})
            const post = await postService.getOne(id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const post = req.body
            if (!post._id) return res.status(400).json({message: "Id isn't provided"})
            const updatedPost = await postService.update(post)
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) return res.status(400).json({message: "Id isn't provided"})
            const deletedPost = await postService.delete(id)
            return res.json(deletedPost)
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }
}

export default PostController
