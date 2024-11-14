const express = require("express");
const router = express.Router();


router.get("/", async (req, res, next) => {
    res.render(
        "./views/Welcome.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "Cars"
        }
    )
})
router.get("/a1", async (req, res, next) => {
    res.render(
        "./views/Tesla.ejs",
        {
            layout: "./layouts/index.ejs",
            title: " Tesla"
        }
    )
})
router.get("/a2", async (req, res, next) => {
    res.render(
        "./views/Toyota.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "Toyota"
        }
    )
})
router.get("/a3", async (req, res, next) => {
    res.render(
        "./views/Mercedes-Benz.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "Mercedes-Benz"
        }
    )
})
router.get("/a4", async (req, res, next) => {
    res.render(
        "./views/BMW.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "BMW"
        }
    )
})
router.get("/a5", async (req, res, next) => {
    res.render(
        "./views/Audi.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "Audi"
        }
    )
})
router.get("/a6", async (req, res, next) => {
    res.render(
        "./views/Ford.ejs",
        {
            layout: "./layouts/index.ejs",
            title: " Ford"
        }
    )
})
router.get("/a7", async (req, res, next) => {
    res.render(
        "./views/Chevrolet.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "Chevrolet"
        }
    )
})
router.get("/a8", async (req, res, next) => {
    res.render(
        "./views/Honda.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "Honda"
        }
    )
})
router.get("/a9", async (req, res, next) => {
    res.render(
        "./views/Nissan.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "Nissan"
        }
    )
})
router.get("/a10", async (req, res, next) => {
    res.render(
        "./views/Volkswagen.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "Volkswagen"
        }
    )
})
router.get("/a11", async (req, res, next) => {
    res.render(
        "./views/Porsche.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "Porsche"
        }
    )
})
router.get("/a12", async (req, res, next) => {
    res.render(
        "./views/Ferrari.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "Ferrari"
        }
    )
})
router.get("/a13", async (req, res, next) => {
    res.render(
        "./views/Lamborghini.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "Lamborghini"
        }
    )
})
router.get("/a14", async (req, res, next) => {
    res.render(
        "./views/Land Rover.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "Land Rover"
        }
    )
})
router.get("/a15", async (req, res, next) => {
    res.render(
        "./views/Jaguar.ejs",
        {
            layout: "./layouts/index.ejs",
            title: "Jaguar"
        }
    )
})





module.exports = router