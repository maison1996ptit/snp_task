
const express = require('express');
const router = express.Router();
const homepage = require('../controllers/homeController/home');


router.get('/',homepage.homeController);
module.exports =
{
    router
}