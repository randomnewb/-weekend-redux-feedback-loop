const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET feedback

// POST feedback
router.post("/", (req, res) => {
    console.log("Posting feedback");
    let sql = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);
    `;
    let { feeling, understanding, support, comments } = req.body;
    pool.query(sql, [feeling, understanding, support, comments])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});

// DELETE all feedback

// DELETE specific feedback

// PUT feedback

module.exports = router;
