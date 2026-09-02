const express = require('express');
const app = express();

const PORT = 3000;

const productRoutes = require('./rout/productrout');

// Middleware to parse JSON body
app.use(express.json());

// Routes - supports both /products and /api/products
app.use('/api', productRoutes);
app.use('/', productRoutes);

app.get('/', (req, res) => {
    res.json({ 
        message: 'Welcome to the Product API',
        endpoints: {
            getAllProducts: 'GET /products or GET /api/products',
            getProductById: 'GET /products/:id or GET /api/products/:id',
            createProduct: 'POST /products or POST /api/products',
            updateProduct: 'PUT /products/:id or PUT /api/products/:id',
            deleteProduct: 'DELETE /products/:id or DELETE /api/products/:id'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});