const express = require("express");
const router = express.Router();

const products = [
    { id: 1, name: "Keyboard" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Monitor" },
    { id: 4, name: "Laptop" }
];

// GET /product
router.get("/", (req, res) => {
    let result = products;

    // filter by id
    if (req.query.id) {
        result = result.filter(p => p.id == req.query.id);
    }

    // filter by name
    if (req.query.name) {
        result = result.filter(p =>
            p.name.toLowerCase().includes(req.query.name.toLowerCase())
        );
    }

    res.json(result);
});

module.exports = router;