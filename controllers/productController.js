const Router = require('express').Router;
const router = Router();

router.get('/', (req, res) => {
    res.render('home', {title: "Home"});
});

router.get('/create', (req, res) => {
    res.render('create', {title: "Create"});
})

router.get('/details/:productId', (req, res) => {
    res.render('details', {title: "Details"});
    console.log(req.params.productId);
})

module.exports = router;