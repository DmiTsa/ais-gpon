const Router = require('express');
const router = new Router();

// router.use('url', router)
router.use('/pol', router); //polRouter
router.use('/inventary-cable', router); //inventaryCableRouter
router.use('/inventary-equip', router); //inventaryEquipRouter
router.use('/cable-section', router); //cableSectionRouter
router.use('/cable-section', router); //cableSectionRouter
router.use('/adress', router); //adressRouter
router.use('/build-object', router); //buildObjectRouter
router.use('/cable', router); //cableRouter
router.use('/cable-unit', router); //cableUnitRouter
router.use('/worker', router); //workerRouter
router.use('/order', router); //orderRouter

module.exports = router;
