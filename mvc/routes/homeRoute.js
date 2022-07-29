const express = require("express");
const router = express.Router();
const { getHomeRoute } = require("../controllers/homeController");
router.get("/", getHomeRoute);
module.exports = router;
