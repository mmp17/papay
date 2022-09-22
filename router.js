const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");

// memberga dahldor routerlar
router.get("/", memberController.home);
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout)

router.get("/menu", (req, res) => {
    res.send("Menu safifasidasiz");
});

router.get("/community", (req, res) => {
    res.send("Community sahifasidasiz");
});

module.exports = router;