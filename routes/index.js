const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("All Posts");
});

module.exports = router;