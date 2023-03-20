import express from 'express'
import mongoose from "mongoose";
import fileUpload from "express-fileupload"
import router from "./router.js";

const PORT = 8080
const DB_URL = `mongodb+srv://aloyanxachik9:055151403xx@cluster0.uph6rwn.mongodb.net/?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT,() => console.log(`Server started on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
startApp()
