// const mongoose = require('mongoose')
require("../models/database");
const Category = require("../models/Category");
const Cars = require("../models/Cars");
const Contact = require("../models/Contact");
const { title } = require("process");


/**
 * GET / homepage
 */

exports.homepage = async (req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    // const limitNumberForcar = 6;
    const latest = await Cars.find({}).sort({createdAt : -1}).limit(limitNumber);
    const audi = await Cars.find({ 'category': "Audi" }).limit(limitNumber);
    const mercedes = await Cars.find({ 'category': "Mercedes" }).limit(limitNumber);
    const rolls_royce = await Cars.find({ 'category': "Rolls_Royce" }).limit(limitNumber);

    const vehicles = { latest, audi, mercedes, rolls_royce };

    res.render("index", { title: "Car Showroom - Home", categories, vehicles });
  } catch (error) {
    res.status(500).send("Error is" + error);
  }
};

/**
 * GET / Categories
 *  Categories
 */

exports.exploreCategories = async (req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render("category", { title: "Car Showroom - Categories", categories });
  } catch (error) {
    res.status(500).send("Error is" + error);
  }
};

/**
 * GET / Categories/:id
 *  Categories
 */

exports.exploreCategoriesById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const categoriesById = await Cars.find({ category: categoryId });
    res.render("category", {
      title: "Car Showroom - Categories",
      categoriesById,
    });
  } catch (error) {
    res.status(500).send("Error is" + error);
  }
};

/**
 * POST / Search Cars
 *  Search
 */

exports.searchCars = async (req, res) => {
  try {
    const searchTerm = req.body.searchTerm;

    const cars = await Cars.find({
      $text: { $search: searchTerm, $diacriticSensitive: true },
    });
    res.render("search", { title: "Car Showroom - Categories", cars });
  } catch (error) {
    res.status(500).send("Error is" + error);
  }
};

/**
 * GET / Explore latest Design
 *  Designs
 */

exports.exploreLatest = async (req, res) => {
  const limitNumber = 7;
  const cars = await Cars.find({}).sort({ _id: -1 }).limit(limitNumber);
  res.render("latestDesigns", { title: "Car Showroom - newly designed", cars });
};


/**
 * GET / show random Design
 *  Designs
 */

exports.showRandom = async (req, res) => {
  let count = await Cars.find().countDocuments();
  let random = Math.floor(Math.random() * count);

  const cars = await Cars.findOne().skip(random).exec();
  res.render("cars", { title: "Car Showroom - newly designed", cars });
  // we also create a new ejs file and showing random but this also work and reduces time may be
  // here we directly call cars instead of creating new file
};

/**
 * GET / Cars
 *  Cars/:id
 */

exports.exploreCars = async (req, res) => {
  try {
    const carsId = req.params.id;
    const cars = await Cars.findById(carsId);
    res.render("cars", { title: "Car Showroom - explore Cars", cars });
  } catch (error) {
    res.status(500).send("Error is" + error);
  }
};

/**
 * GET / Submit Cars
 *  Submit Form
 */

exports.submitCar = async (req, res) => {
  try {
    const infoErrorsObj = req.flash("infoErrors");
    const infoSubmitObj = req.flash("infoSubmit");
    res.render("submit-Car", { title: "Car Showroom - Cars",infoErrorsObj,infoSubmitObj });
  } catch (error) {
    res.status(500).send("Error is" + error);
  }
};

/**
 * POST /submit-recipe
 * Submit Recipe
*/
exports.submitCarOnPost = async(req, res) => {
  try {
    let imageUploadFile;
    let uploadPath;
    let newImageName;

    if(!req.files || Object.keys(req.files).length === 0){
      console.log('No Files where uploaded.');
    } else {

      imageUploadFile = req.files.image;
      newImageName = Date.now() + imageUploadFile.name;

      uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

      imageUploadFile.mv(uploadPath, function(err){
        if(err) return res.satus(500).send(err);
      });

    }

    const newDesign = new Cars({
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      functionality: req.body.functionality,
      category: req.body.category,
      image: newImageName
    });


     await newDesign.save();

     req.flash("infoSubmit", 'Design added')
     res.redirect('/submit-car')

  } catch (error) {

    req.flash("infoErrors", error)
     res.redirect('/submit-car')
  }
}  
  
/**
 * GET /  Contact form
 *  contact 
 */

exports.getContact = async (req, res) => {
  try {
    res.render("contact", { title: "Car Showroom - Cars" });
  } catch (error) {
    res.status(500).send("Error is" + error);
  }
};

/**
 * post / Submit Contact form
 *  contact 
 */

exports.submitContact = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;


    // if (req.session.formSubmitted) {
    //   return res.redirect('/submit-contact');
    // }

    const newSubmission = new Contact({
      name,
      email,
      mobile,
      message
    });
    
    await newSubmission.save();
     
    res.redirect('/thank-you');

  } catch (err) {
    console.error('Error submitting form:', err);
    res.status(500).send('Error submitting form');
  }
};



// exports.thankYou = async (req, res) => {
//   try {
//     res.render("submit-contact", { title: "Car Showroom - Cars" });
//   } catch (error) {
//     res.status(500).send("Error is" + error);
//   }
// };


/**
 * get / About form
 *  about 
 */

exports.getAbout = async (req, res) => {
  try {
    res.render("about", { title: "Car Showroom - Cars" });
  } catch (error) {
    res.status(500).send("Error is" + error);
  }
};














// async function insertDummyCarsData(){
//         try {
//             await Cars.insertMany([
//                 {
//                   "_id": {
//                     "$oid": "674dd8d3c59f69c8ebcc1907"
//                   },
//                   "name": "Audi A3",
//                   "description": "The Audi A3 epitomizes compact luxury, blending high performance with cutting-edge technology and premium comfort.",
//                   "email": "support@audia3.com",
//                   "functionality": [
//                     "High Performance",
//                     "Advanced Infotainment System",
//                     "Fuel Efficiency",
//                     "Luxurious Interiors"
//                   ],
//                   "category": "Audi",
//                   "image": "Audi-A3.jpg",
//                   "__v": 0
//                 }]
//             );
//         }catch(error){
//             console.log(error);
//         }

//     }

// async function insertDummyCategoryData(){
//     try {
//         await Category.insertMany(
// [{
//     "_id": {
//       "$oid": "614dd75a9693912a00f0514d"
//     },
//     "name": "Audi",
//     "image": "Audi.png",
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "614dd75a9693912a00f0514e"
//     },
//     "name": "Mercedes",
//     "image": "Mercedes.jpg",
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "614dd75a9693912a00f0514c"
//     },
//     "name": "Rolls_Royce",
//     "image": "Rolls_Royce.jpg",
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "614dd75a9693912a00f0514f"
//     },
//     "name": "Bugatti",
//     "image": "Bugatti.jpg",
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "614dd75a9693912a00f05150"
//     },
//     "name": "Ferrari",
//     "image": "ferrari.jpg",
//     "__v": 0
//   },{
//     "_id": {
//       "$oid": "614dd75a9693912a00f05151"
//     },
//     "name": "Thar",
//     "image": "Thar.jpg",
//     "__v": 0
//   }]
//         )
//     } catch (error) {
//         console.log('err', + error);
//     }
// }

// insertDummyCategoryData();
