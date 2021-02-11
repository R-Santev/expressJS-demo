const Router = require('express').Router;
const router = Router();

const accessoryService = require('../services/accessoryService');

router.get('/create', (req, res) => {
    res.render('createAccessory', { title: 'Create Accessory' });
})

module.exports = router;