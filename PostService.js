import Post from "./Posts.js";
import FileService from "./FileService.js";

const fileService = new FileService()

class PostService {
    create(createdPost, picture) {
        const fileName = fileService.saveFile(picture)
        return Post.create({...createdPost, picture: fileName})
    }

    getAll() {
        return Post.find()
    }

    getOne(id) {
        return Post.findById(id)
    }

    update(post) {
        return Post.findByIdAndUpdate(post._id, post, {new: true})
    }

    delete(id) {
        return Post.findByIdAndDelete(id)
    }
}

export default PostService
