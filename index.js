import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors"
import { menuRouter } from "./routes/menuRouter.js";

dotenv.config();
// console.log(process.env)
const app = express();
const PORT = process.env.PORT;
// req => what is the req we sent to Server
// res => what we receive for the req we sent to server

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongo is Connected");
    return client;
}

export const client = await createConnection();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Green Inn Backend App 🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/menu", menuRouter)


app.listen(PORT, () => console.log("Server started on PORT ", PORT));
