const Router = require('express').Router;
const router = Router();

const productController = require('./controllers/productController');
const aboutController = require('./controllers/aboutController');
const accessoriesController = require('./controllers/accessoriesController');

router.use('/', productController);
router.use('/accessories', accessoriesController)
router.use('/about', aboutController);

router.get('*', (req, res) => {
    res.render('404', {title: "Not Found"});
})

module.exports = router;