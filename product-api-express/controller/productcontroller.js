const products = require('../data/product');

exports.getAllProducts = (req, res) => {
    res.status(200).json({
        success: true,
        count: products.length,
        data: products
    });
};

exports.getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if(!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }   

    res.status(200).json({
        success: true,
        data: product
    });
};

exports.createProduct = (req, res) => {
    const { name, description, price, image, category, stock } = req.body;

    if (!name || price === undefined) {
        return res.status(400).json({
            success: false,
            message: 'Please provide name and price'
        });
    }

    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;

    const newProduct = {
        id: newId,
        name,
        description: description || '',
        price: Number(price),
        image: image || '',
        category: category || '',
        stock: stock !== undefined ? Number(stock) : 0
    };

    products.push(newProduct);

    res.status(201).json({
        success: true,
        data: newProduct
    });
};

exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }

    const { name, description, price, image, category, stock } = req.body;

    if (name !== undefined) products[index].name = name;
    if (description !== undefined) products[index].description = description;
    if (price !== undefined) products[index].price = Number(price);
    if (image !== undefined) products[index].image = image;
    if (category !== undefined) products[index].category = category;
    if (stock !== undefined) products[index].stock = Number(stock);

    res.status(200).json({
        success: true,
        data: products[index]
    });
};

exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        });
    }

    const deletedProduct = products.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        message: 'Product deleted successfully',
        data: deletedProduct
    });
};