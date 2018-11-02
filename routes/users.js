const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', (req, res) => {
    console.log(req.body);
    res.send('processing registeration form...');
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', (req, res) => {
    res.send('prcessing logout request...');
});
 
router.get('/logout', (req, res) => {
    res.send('processing logout request...');
});

module.exports = router;