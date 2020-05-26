const router = require('express').Router();

router.get('/login', (req,res,next) => {
    res.render('login');
});

router.get('/logout', (req,res,next) => {
    res.send('logging out');
});

router.get('/google', (req,res,next) => {
    res.send('loggin in with google');
});

router.get('/facebook', (req,res,next) => {
    res.send('loggin in with facebook');
});

router.get('/linkedin', (req,res,next) => {
    res.send('loggin in with linkedin');
});

router.get('/twitter', (req,res,next) => {
    res.send('loggin in with twitter');
});

router.get('/github', (req,res,next) => {
    res.send('loggin in with github');
});

module.exports = router;

