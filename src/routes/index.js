const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    res.render('index', {title: 'First Node App'});
});

router.get('/about', (req, res) => {
    res.render('about', {title: 'About Page'});
});

router.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact Page'});
});

module.exports = router;