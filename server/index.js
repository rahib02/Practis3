const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")


dotenv.config()

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        imageUrl: { type: String, required: true }
    },
    { timestamps: true }
)

const Users = mongoose.model("users", userSchema)


const app = express()



app.use(cors())
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.send("<h1>Admin Panel</h1>")
})

app.get("/users", (req, res) => {
    Users.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        }
        else {
            res.status(404).json({ message: err })
        }
    })
})



app.get("/users/:id", (req, res) => {
    const { id } = req.params
    Users.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.send(doc)

            } else {
                res.status(404).json({ message: "NOT FOUND" })
            }
        } else {
            res.status(500).json({ message: err })
        }
    })
})
app.delete("/users/:id", (req, res) => {

    const { id } = req.params
    Users.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("Deleted data")

        } else {
            res.status(404).json({ message: err })
        }
    })
})
app.post("/users", (req, res) => {
    const user = new Users({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        imageUrl: req.body.imageUrl
    })
    user.save()
    res.send({ message: "User Created" })
})
app.put("/users/:id", (req, res) => {
    const { id } = req.params

    Users.findByIdAndUpdate(id, req.body, (err, doc) => {
        if (!err) {
            res.status(200)
        }
        else {
            res.status(404).json({ message: err })
        }
    })
    res.send({ message: "Successfully Updated" })
})
const PORT = process.env.PORT
const url = process.env.CONNECTION_URL.replace("<password>", process.env.PASSWORD)
mongoose.set('strictQuery', true);
mongoose.connect(url, (err) => {
    if (!err) {
        console.log("DB connect");
        app.listen(PORT, () => {
            console.log("Server start");
        })
    }
})