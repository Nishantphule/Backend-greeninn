import { getAllMenu } from "../helper.js";
import express from "express";

const router = express.Router();

//get all Liquids
router.get("/liquids", async (req, res) => {
    try {
        const menu = await getAllMenu(req);
        const liquids = menu[1]
        res.status(200).json(liquids);
    } catch (error) {
        res.status(503).json({ message: "Internal Server Error" })
    }

});

// breakfast
router.get("/breakfast", async (req, res) => {
    try {
        const menu = await getAllMenu(req);
        const breakfast = menu[0]
        res.status(200).json(breakfast);
    } catch (error) {
        res.status(503).json({ message: "Internal Server Error" })
    }

});

// south indian
router.get("/southIndian", async (req, res) => {
    try {
        const menu = await getAllMenu(req);
        const southIndian = menu[2]
        res.status(200).json(southIndian);
    } catch (error) {
        res.status(503).json({ message: "Internal Server Error" })
    }
});

// snacks and papad
router.get("/snacks&papad", async (req, res) => {
    try {
        const menu = await getAllMenu(req);
        const snacksPapad = { 'snacks': menu[4].snacks, "papad": menu[4].papad }
        res.status(200).json(snacksPapad);
    } catch (error) {
        res.status(503).json({ message: "Internal Server Error" })
    }
});

// upawas
router.get("/upawas", async (req, res) => {
    try {
        const menu = await getAllMenu(req);
        const upawas = {
            "upawas": menu[4].upawas
        }
        res.status(200).json(upawas);
    } catch (error) {
        res.status(503).json({ message: "Internal Server Error" })
    }
});

// pavbhaji pulao chole
router.get("/pavBhaji&chole&pulao", async (req, res) => {
    try {
        const menu = await getAllMenu(req);
        const pavbhajiPulaoChole = menu[3];
        res.status(200).json(pavbhajiPulaoChole);
    } catch (error) {
        res.status(503).json({ message: "Internal Server Error" })
    }
});

// pizza , pasta and sandwiches
router.get("/pizza&pasta&sandwiches", async (req, res) => {
    try {
        const menu = await getAllMenu(req);
        const pizzaPastaSandwiches = menu[5]
        res.status(200).json(pizzaPastaSandwiches);
    } catch (error) {
        res.status(503).json({ message: "Internal Server Error" })
    }
});

// chat
router.get("/chaat", async (req, res) => {
    try {
        const menu = await getAllMenu(req);
        const chaat = menu[5].chaat
        res.status(200).json({ chaat });
    } catch (error) {
        res.status(503).json({ message: "Internal Server Error" })
    }
});

// chinese
router.get("/chinese", async (req, res) => {
    try {
        const menu = await getAllMenu(req);
        const chinese = menu[6]
        res.status(200).json(chinese);
    } catch (error) {
        res.status(503).json({ message: "Internal Server Error" })
    }
});

// continental and tandoor
router.get("/continental&tandoor", async (req, res) => {
    try {
        const menu = await getAllMenu(req);
        const continentalTandoor = menu[7]
        res.status(200).json(continentalTandoor);
    } catch (error) {
        res.status(503).json({ message: "Internal Server Error" })
    }
});

// main course
router.get("/mainCourse", async (req, res) => {
    try {
        const menu = await getAllMenu(req);
        const mainCourse = menu[8]
        res.status(200).json(mainCourse);
    } catch (error) {
        res.status(503).json({ message: "Internal Server Error" })
    }
});

// deserts
router.get("/deserts", async (req, res) => {
    try {
        const menu = await getAllMenu(req);
        const deserts = menu[9]
        res.status(200).json(deserts);
    } catch (error) {
        res.status(503).json({ message: "Internal Server Error" })
    }
});

export const menuRouter = router;
