const express = require('express');
const app = express();

const PORT = 3000;

const productRoutes = require('./rout/productrout');

app.use(express.json());

app.use('/', productRoutes);

app.get('/', (req, res) => {
    res.json({ 
        message: 'Welcome to the Product API',
        endpoints: {
            getAllProducts: 'GET /products',
            getProductById: 'GET /products/:id',
            createProduct: 'POST /products',
            updateProduct: 'PUT /products/:id',
            deleteProduct: 'DELETE /products/:id'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});