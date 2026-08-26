const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const productRouter = require("./routes/product");

app.use("/product", productRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});