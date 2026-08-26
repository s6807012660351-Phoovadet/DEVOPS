const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// set ejs as the template engine
app.set('view engine', 'ejs');


// static folder
app.use(express.static(path.join(__dirname, 'public')));

//sample product data 
const products = [
    {
        id: 1001,
        name: 'Computer set 1',
        description: 'Powerful computer set for gaming and work.',
        price: 499
    },
    {
        id: 1002,
        name: 'Computer set 2',
        description: 'Powerful computer set for work.',
        price: 399
    },

    {
        id: 1003,
        name: 'Computer set 3',
        description: 'Affordable computer set for basic tasks.',
        price: 299
    },
    {
        id: 1004,
        name: 'Computer set 4',
        description: 'Entry-level computer set for basic tasks.',
        price: 199
    },
    {
        id: 1005,
        name: 'Computer set 5',
        description: 'High-performance computer set for professionals.',
        price: 599
    },
];


//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    //res.send('Welcome to express.');
});



//Display products in ejs file
app.get('/products', (req, res) => {
    res.render('product', {
        pageTitle: 'Our products',
        products: products
    });
});



app.get('/about', (req, res) => {
    res.send('Hello, Phoovadet sinsumang');
});
app.get('/data', (req, res) => {
    res.json({name:'phoovadet',email:'phoovadet@example.com'});
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});