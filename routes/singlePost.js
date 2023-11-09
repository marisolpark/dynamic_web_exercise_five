const express = require('express');
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get("/", (req, res) => {
    res.send("You are in the single post page")
});

router.get("/:postId", (req, res) => {
    const postId = req.params.postId;
    const postsQuery = firestore.getDoc(firestore.doc(db, "posts", postId));

    postsQuery
        .then((response) => {
            res.send(response.data());
        })
        .catch((error) => {
            res.send(error);
        });
});

module.exports = router;