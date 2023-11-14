const express = require('express');
const router = express.Router();
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

const submitForm = `
    <form action="/create/submit">
        <lable>Title
            <input type="text" name="postTitle" placeholder="put title here"/>
        </lable>
        <lable>Text
            <input type="text" name="postTexts" placeholder="put text here"/>
        </lable>
        <lable>Author
            <input type="text" name="author" placeholder="put author name here"/>
        </lable>
        <button type="submit">Submit</button>
    </form>
    `;

router.get("/", (req, res) => {
    res.send(submitForm);
});

router.get("/submit", (req, res) => {
    const queryParams = req.query;
    const title = queryParams.postTitle;
    const text = queryParams.postTexts;
    const author = queryParams.author;
    console.log(title, text, author);

    const id = title.replace(/\s+/g, "-").toLowerCase(); //with RegEx
    const setBlogPost = firestore.setDoc(
        firestore.doc(db, "posts", id),
        {
            postTitle:title,
            postTexts: text,
            author:author,
        });

    setBlogPost
        .then(() =>{
            res.send(`
            <h1>thanks</h1>
            <p><a href="/create">Submit another post</a>.</p>
            `);
        })
        .catch((error) => {
            console.warn(error);
            res.send(`Error Submitting: ${error.toString()}`);
        });
});

module.exports = router;