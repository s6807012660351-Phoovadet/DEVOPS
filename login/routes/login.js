const express = require("express");
const router = express.Router();

// เมื่อกด Login
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    res.send(`
        <h1>Login Successful!</h1>
        <h3>Username: ${username}</h3>
        <h3>Password: ${password}</h3>
        <a href="/">Back</a>
    `);
});

module.exports = router;