const Router = require('express');
const router = new Router();

const polRouter = require('./polRouter');
const inventaryCableRouter = require('./inventaryCableRouter');
const inventaryEquipRouter = require('./inventaryEquipRouter');
const cableSectionRouter = require('./cableSectionRouter');
const adressRouter = require('./adressRouter');
const buildObjectRouter = require('./buildObjectRouter');
const cableRouter = require('./cableRouter');
const cableUnitRouter = require('./cableUnitRouter');
const workerRouter = require('./workerRouter');
const orderRouter = require('./orderRouter');
const userRouter = require('./userRouter');

// router.use('url', router)
router.use('/pol', polRouter); //polRouter
router.use('/inventary-cable', inventaryCableRouter); //inventaryCableRouter
router.use('/inventary-equip', inventaryEquipRouter); //inventaryEquipRouter
router.use('/cable-section', cableSectionRouter); //cableSectionRouter
router.use('/adress', adressRouter); //adressRouter
router.use('/build-object', buildObjectRouter); //buildObjectRouter
router.use('/cable', cableRouter); //cableRouter
router.use('/cable-unit', cableUnitRouter); //cableUnitRouter
router.use('/worker', workerRouter); //workerRouter
router.use('/order', orderRouter); //orderRouter
router.use('/user', userRouter); //userRouter

module.exports = router;

//polRouter
//inventaryCableRouter
//inventaryEquipRouter
//cableSectionRouter
//adressRouter
//buildObjectRouter
//cableRouter
//cableUnitRouter
//workerRouter
//orderRouter
//userRouter
