const express = require('express');
const router = express.Router();
const controllers = require('../controllers/color-controllers');
const { check, validationResult } = require('express-validator');
const verifyToken = require('../auth/VerifyToken');

router.post('/color', verifyToken, controllers.createColor);
router.get('/color', verifyToken, controllers.getColorsList);
router.get('/color/:id', verifyToken, controllers.getColorById);
router.get('/color/:id', verifyToken, controllers.updateColorById);
router.get('/color/:id', verifyToken, controllers.deleteColorById);

module.exports = router;
