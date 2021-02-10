const Router = require('express').Router;
const router = Router();
const productServices = require('../services/productServices');

router.get('/', (req, res) => {
    let products = productServices.getAll(req.query);
    res.render('home', {title: "Home", products});
});

router.get('/create', (req, res) => {
    res.render('create', {title: "Create"});
})

router.post('/create', (req, res) => {

    //TODO: Validate form data
    productServices.create(req.body)
        .then(res.redirect('/'))
        .catch(err => console.log(err));
    
})

router.get('/details/:productId', (req, res) => {
    let cube = productServices.getOne(req.params.productId);
    res.render('details', {title: "Details", cube});
})

module.exports = router;