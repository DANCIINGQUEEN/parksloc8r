const express = require('express');
const router = express.Router();
// const ctrlMain=require('../controllers/main')

const ctrlLocations=require('../controllers/locations')
const ctrlOthers=require('../controllers/others')


/* GET home page. */
/*Location pages*/
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/*Other pages*/
router.get('/about', ctrlOthers.about)



module.exports = router;
//2017125009 박지웅
