import { ObjectId } from 'mongodb';
import { client } from "./index.js";

export async function getAllMenu(req) {
    return await client
        .db("GreenInn")
        .collection("Menu")
        .find({})
        .toArray();
}