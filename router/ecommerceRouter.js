const group = require('express-router-group');
const express = require('express');
const ecommerceRouter = express.Router();

// Get category
const getCategoryData = require('../controller/Admin/getCategoryData');
const getCategoryWishProduct = require('../controller/Ecommerce/getCategoryWishProduct');
const categoryAllProduct = require('../controller/Ecommerce/categoryAllProduct');
const subCategoryBarndProduct = require('../controller/Ecommerce/subCategoryBarndProduct');
ecommerceRouter.group("/api/ev1", router => {
    router.get("/getCategoryData", getCategoryData);
    router.get("/getCategoryWishProduct", getCategoryWishProduct);
    router.get("/categoryAllProduct/:catId", categoryAllProduct);
    router.get("/subCategoryBrandProduct/:brand", subCategoryBarndProduct);
});

// Get single product details
const singleProductDetails = require('../controller/Ecommerce/singleProductDetails');
ecommerceRouter.get("/api/ev1/singleProductDetails/:id", singleProductDetails);  // (done)

// Get recent all product
const recentProduct = require('../controller/Ecommerce/recentProduct');
ecommerceRouter.get("/api/ev1/recentProduct/:limits/:offsets", recentProduct);  // (done)

// Get all blog
const recentAllBlog = require('../controller/Ecommerce/recentAllBlog');
ecommerceRouter.get("/api/ev1/recentAllBlog", recentAllBlog);  // (done)

// Get all blog details
const recentAllBlogDetails = require('../controller/Ecommerce/recentAllBlogDetails');
ecommerceRouter.get("/api/ev1/recentAllBlogDetails/:id", recentAllBlogDetails);  // (done)

// Get all all outlet 
const allOutlet = require('../controller/Ecommerce/allOutlet');
// Get all all outlet details
const allOutletDetails = require('../controller/Ecommerce/allOutletDetails');
const outletWishProduct = require('../controller/Ecommerce/outletWishProduct');
ecommerceRouter.group("/api/ev1", router => {
    router.get("/allOutlet", allOutlet);
    router.get("/allOutletDetails/:id", allOutletDetails);
    router.get("/outletWishProduct/:id", outletWishProduct);
});
// // Add to shopping cart.
const addToShoppingCart = require('../controller/Ecommerce/addToShoppingCart');
const newShoppingCartOrder = require('../controller/Ecommerce/newShoppingCartOrder');
const getShoppingCartInfo = require('../controller/Ecommerce/getShoppingCartInfo');
const deleteShoppingCartInfo = require('../controller/Ecommerce/deleteShoppingCartInfo');
const shoppingCartQtyUpdate = require('../controller/Ecommerce/shoppingCartQtyUpdate');
ecommerceRouter.group("/api/ev1", router => {
    router.get("/getShoppingCartInfo/:userId", getShoppingCartInfo);
    router.delete("/deleteShoppingCartInfo/:id", deleteShoppingCartInfo);
    router.post("/AddToShoppingCart", addToShoppingCart);
    router.post("/newShoppingCartOrder", newShoppingCartOrder); 
    router.put("/shoppingCartQtyUpdate", shoppingCartQtyUpdate); 
});

// // User login
const userLogin = require('../controller/Ecommerce/userLogin');
ecommerceRouter.post("/api/ev1/UserLogin", userLogin);

// // User singup
const userSingup = require('../controller/Ecommerce/userSingup'); 
ecommerceRouter.post("/api/ev1/userSingup", userSingup);

// Show Slider
const getSlider = require('../controller/Ecommerce/getSlider');
ecommerceRouter.get("/api/ev1/GetSlider", getSlider); 

// // Flash sales product
const getFlashSalesProduct = require('../controller/Ecommerce/getFlashSalesProduct'); 
ecommerceRouter.get("/api/ev1/getFlashSalesProduct", getFlashSalesProduct);

// // // Common router for update delete
const getInformationSingle = require("../commonFunction/getInformationSingle");
const Update = require("../commonFunction/Update");
const Delete = require("../commonFunction/Delete");
ecommerceRouter.group("/api/ev1", router => {
    router.get("/GetInformationSingle/:tableName&:condition", getInformationSingle);
    // router.put("/update", Update);
    // router.post("/Delete", Delete);
    
});

module.exports = ecommerceRouter; 