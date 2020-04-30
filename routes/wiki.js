const express = require('express');
const router = express.Router();
const retrievePages = require('../views/wikipage');
const addPage = require('../views/addPage');


router.get('/', async (req, res) => {
    try {
        const wikipages = await retrievePages();
        res.send(wikipages);  
    } catch (error) {
        console.error(error);
    }
});

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        res.send();
    } catch (error) {
        console.error(error);
    }
});

router.get('/add', async (req, res) => {
    res.send(await addPage());
})

module.exports = router;