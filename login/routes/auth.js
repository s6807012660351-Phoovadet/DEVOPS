const express = require("express");
const router = express.Router();

// POST /auth/login
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    res.send(`
        <h1>Login Successful!</h1>
        <p>Username: ${username}</p>
        <p>Password: ${password}</p>
        <a href="/">Back</a>
    `);
});

module.exports = router;