const group = require('express-router-group');
const express = require('express');
const B2BRouter = express.Router();

// Get category
const getCategoryData = require('../controller/Admin/getCategoryData');
const getCategoryWishProduct = require('../controller/B2B/getCategoryWishProduct');
const categoryAllProduct = require('../controller/B2B/categoryAllProduct');
const subCategoryBarndProduct = require('../controller/B2B/subCategoryBarndProduct');
B2BRouter.group("/api/bv1", router => {
    router.get("/getCategoryData", getCategoryData);
    router.get("/getCategoryWishProduct", getCategoryWishProduct);
    router.get("/categoryAllProduct/:catId", categoryAllProduct);
    router.get("/subCategoryBrandProduct/:brand", subCategoryBarndProduct);
});

// Get single product details
const singleProductDetails = require('../controller/B2B/singleProductDetails');
B2BRouter.get("/api/bv1/singleProductDetails/:id", singleProductDetails);  // (done)

// Get recent all product
const recentProduct = require('../controller/B2B/recentProduct');
B2BRouter.get("/api/bv1/recentProduct/:limits/:offsets", recentProduct);  // (done)

// Get all blog
const recentAllBlog = require('../controller/B2B/recentAllBlog');
B2BRouter.get("/api/bv1/recentAllBlog", recentAllBlog);  // (done)

// Get all blog details
const recentAllBlogDetails = require('../controller/B2B/recentAllBlogDetails');
B2BRouter.get("/api/bv1/recentAllBlogDetails/:id", recentAllBlogDetails);  // (done)

// Get all all outlet 
const allOutlet = require('../controller/B2B/allOutlet');
// Get all all outlet details
const allOutletDetails = require('../controller/B2B/allOutletDetails');
const outletWishProduct = require('../controller/B2B/outletWishProduct');
B2BRouter.group("/api/bv1", router => {
    router.get("/allOutlet", allOutlet);
    router.get("/allOutletDetails/:id", allOutletDetails);
    router.get("/outletWishProduct/:id", outletWishProduct);
});
// // Add to shopping cart.
const addToShoppingCart = require('../controller/B2B/addToShoppingCart');
const newShoppingCartOrder = require('../controller/B2B/newShoppingCartOrder');
const getShoppingCartInfo = require('../controller/B2B/getShoppingCartInfo');
const deleteShoppingCartInfo = require('../controller/B2B/deleteShoppingCartInfo');
const shoppingCartQtyUpdate = require('../controller/B2B/shoppingCartQtyUpdate');
B2BRouter.group("/api/bv1", router => {
    router.get("/getShoppingCartInfo/:userId", getShoppingCartInfo);
    router.delete("/deleteShoppingCartInfo/:id", deleteShoppingCartInfo);
    router.post("/AddToShoppingCart", addToShoppingCart);
    router.post("/newShoppingCartOrder", newShoppingCartOrder); 
    router.put("/shoppingCartQtyUpdate", shoppingCartQtyUpdate); 
});

// // User login
const userLogin = require('../controller/B2B/userLogin');
B2BRouter.post("/api/bv1/UserLogin", userLogin);

// Show Slider
const getSlider = require('../controller/B2B/getSlider');
B2BRouter.get("/api/bv1/GetSlider", getSlider); 

// // Flash sales product
const getFlashSalesProduct = require('../controller/B2B/getFlashSalesProduct'); 
B2BRouter.get("/api/bv1/getFlashSalesProduct", getFlashSalesProduct);

// // // Common router for update delete
const getInformationSingle = require("../commonFunction/getInformationSingle");
const Update = require("../commonFunction/Update");
const Delete = require("../commonFunction/Delete");
B2BRouter.group("/api/bv1", router => {
    router.get("/GetInformationSingle/:tableName&:condition", getInformationSingle);
    // router.put("/update", Update);
    // router.post("/Delete", Delete);
    
});

module.exports = B2BRouter; 