const express = require('express');
const path = require('path');
const contactController = require('../controllers/contact');
const rootDir=require('../util/path')

const router = express.Router();


router.get('/contact',contactController.contactus );
router.post('/success', contactController.success);

module.exports=router;