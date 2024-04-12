const express = require('express');
const router = express.Router();
const carController = require('../controller/carController.js')

/*
* App Routes
*/

router.get('/', carController.homepage);
router.get('/cars/:id', carController.exploreCars);
router.get('/categories', carController.exploreCategories);
router.get('/categories/:id', carController.exploreCategoriesById);
router.post('/search', carController.searchCars);
router.get('/explore-latest', carController.exploreLatest);
router.get('/show-random', carController.showRandom);
router.get('/submit-car', carController.submitCar);
router.post('/submit-car', carController.submitCarOnPost);

// contact
router.get('/contact', carController.getContact);
router.post('/contact', carController.submitContact);
router.get("/thank-you", (req, res) => {
    res.render('thank-you', { title: "Thank You - Cooking Blog" });
  });


// about
router.get('/about', carController.getAbout);

module.exports = router;

