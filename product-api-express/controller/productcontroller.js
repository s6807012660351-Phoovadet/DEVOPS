const products = require('../data/product');

// GET /products or GET /api/products
exports.getAllProducts = (req, res) => {
    res.status(200).json({
        success: true,
        count: products.length,
        data: products
    });
};

// GET /products/:id or GET /api/products/:id
exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            success: false,
            error: 'Product not found'
        });
    }

    res.status(200).json({
        success: true,
        data: product
    });
};

// POST /products or POST /api/products
exports.createProduct = (req, res) => {
    const {
        id, name, price, description, category, stock, image
    } = req.body;

    if (!name || price === undefined) {
        return res.status(400).json({
            success: false,
            error: 'name and price are required'
        });
    }

    // Auto-generate ID if not specified in body
    const newId = id !== undefined 
        ? parseInt(id) 
        : (products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1);

    const newProduct = {
        id: newId,
        name,
        price: Number(price),
        description: description || '',
        category: category || '',
        image: image || '',
        stock: stock !== undefined ? Number(stock) : 0
    };

    products.push(newProduct);

    res.status(201).json({
        success: true,
        data: newProduct
    });
};

// PUT /products/:id or PUT /api/products/:id
exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            success: false,
            error: 'No product found'
        });
    }

    if (req.body.name !== undefined) product.name = req.body.name;
    if (req.body.price !== undefined) product.price = Number(req.body.price);
    if (req.body.description !== undefined) product.description = req.body.description;
    if (req.body.category !== undefined) product.category = req.body.category;
    if (req.body.image !== undefined) product.image = req.body.image;
    if (req.body.stock !== undefined) product.stock = Number(req.body.stock);

    res.status(200).json({
        success: true,
        data: product
    });
};

// DELETE /products/:id or DELETE /api/products/:id
exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            error: 'No product found'
        });
    }

    const [deletedProduct] = products.splice(index, 1);

    res.status(200).json({
        success: true,
        data: deletedProduct
    });
};