const group = require('express-router-group');
const express = require('express');
const adminRouter = express.Router();
const verifyToken = require('../commonFunction/auth');

// // Multer for img upload
const avatarUpload = require('../commonFunction/avatarUpload');
const attachmentUpload = require('../commonFunction/avaterMultiUpload');

// // Registration
// const Registration = require("../controller/Admin/Registration");
// adminRouter.post("/registration", Registration);

// // Admin login
const Login = require("../controller/Admin/login");
adminRouter.post("/api/v1/login", Login);

// Add category
const addCategory = require("../controller/Admin/addCategory");
const getCategoryData = require("../controller/Admin/getCategoryData");

adminRouter.group("/api/v1", router => {
    router.get("/getCategoryData", getCategoryData);
    router.post("/addCategory", avatarUpload, addCategory);
    // router.put("/updateStudentInfo", updateStudentInfo);
    // router.delete("/studentInfoDelete", studentInfoDelete);
});

// Add sub category
const addCategorySub = require("../controller/Admin/addSubCategory");
const getSubCategoryData = require("../controller/Admin/getSubCategoryData");
adminRouter.group("/api/v1", router => {
    router.get("/getSubCategoryData", getSubCategoryData);
    router.post("/addSubCategory", avatarUpload, addCategorySub);
});
// Add category brand
const addCategoryBrand = require("../controller/Admin/addCategoryBrand");
const getBrandData = require("../controller/Admin/getBrandData");
adminRouter.group("/api/v1", router => {
    router.get("/getBrandData", getBrandData);
    router.post("/addCategoryBrand", avatarUpload, addCategoryBrand);
});

// Add slider and ads
const addSliderAndAds = require('../controller/Admin/addSliderAndAds');
const getSliderAndAds = require('../controller/Admin/getSliderAndAds');
adminRouter.group("/api/v1", router => {
    router.get("/getSliderAndAds", getSliderAndAds);
    router.post("/addSliderAndAds", avatarUpload, addSliderAndAds);
});
// Add product
const addProduct = require('../controller/Admin/addProduct');
const getAllProduct = require('../controller/Admin/getAllProduct');
const getAllPackageProduct = require('../controller/Admin/getAllPackageProduct');
const getAllOfferProduct = require('../controller/Admin/getAllOfferProduct');
const getAllFlashSalesProduct = require('../controller/Admin/getAllFlashSalesProduct');
const getAllCashBackProduct = require('../controller/Admin/getAllCashBackProduct');
const getAllDiscountProduct = require('../controller/Admin/getAllDiscountProduct');
adminRouter.group("/api/v1", router => {
    router.get("/getAllProduct", getAllProduct);
    router.get("/getAllPackageProduct", getAllPackageProduct);
    router.get("/getAllOfferProduct", getAllOfferProduct);
    router.get("/getAllFlashSalesProduct", getAllFlashSalesProduct);
    router.get("/getAllCashBackProduct", getAllCashBackProduct);
    router.get("/getAllDiscountProduct", getAllDiscountProduct);
    router.post("/addProduct", attachmentUpload, addProduct);
});

// Remainder admin product stock qty
const getRemainderAdminProductStockQty = require('../controller/Admin/getRemainderAdminProductStockQty');
adminRouter.get("/api/v1/getRemainderAdminProductStockQty", getRemainderAdminProductStockQty);

// Get admin product stock qty
const getRemainderAdminProductPackStockQty = require('../controller/Admin/getRemainderAdminProductPackStockQty');
adminRouter.get("/api/v1/getRemainderAdminProductPackStockQty", getRemainderAdminProductPackStockQty);


// // Update product qty and get product
// const getProductForUpdateQty = require('../controller/Admin/getProductForUpdateQty');
// adminRouter.get("/GetProductForUpdateQty", getProductForUpdateQty);

// const updateProductQty = require('../controller/Admin/updateProductQty');
// adminRouter.post("/UpdateProductQty", updateProductQty);

// // Reguler product stock list
// const regulerProductStockQtyList = require('../controller/Admin/regulerProductStockQtyList');
// adminRouter.get("/RegulerProductStockQtyList", regulerProductStockQtyList);

// // Package product stock list 
// const packageProductStockQtyList = require('../controller/Admin/packageProductStockQtyList');
// adminRouter.get("/PackageProductStockQtyList", packageProductStockQtyList);

// // Daily pending order list
// const dailyPendingOrderList = require('../controller/Admin/dailyPendingOrderList');
// adminRouter.get("/DailyPendingOrderList", dailyPendingOrderList);

// // Daily process order list
// const dailyProcessOrderList = require('../controller/Admin/dailyProcessOrderList');
// adminRouter.get("/DailyProcessOrderList", dailyProcessOrderList);

// // Daily success order list
// const dailySuccessOrderList = require('../controller/Admin/dailySuccessOrderList');
// adminRouter.get("/DailySuccessOrderList", dailySuccessOrderList);

// // Daily cancel order list
// const dailyCancelOrderList = require('../controller/Admin/dailyCancelOrderList');
// adminRouter.get("/DailyCancelOrderList", dailyCancelOrderList);

// // Daily return pending order list
// const dailyReturnPendingOrderList = require('../controller/Admin/dailyReturnPendingOrderList');
// adminRouter.get("/DailyReturnPendingOrderList", dailyReturnPendingOrderList);

// // Daily return process order list
// const dailyReturnProcessOrderList = require('../controller/Admin/dailyReturnProcessOrderList');
// adminRouter.get("/DailyReturnProcessOrderList", dailyReturnProcessOrderList);

// // Daily return success order list
// const dailyReturnSuccessOrderList = require('../controller/Admin/dailyReturnSuccessOrderList');
// adminRouter.get("/DailyReturnSuccessOrderList", dailyReturnSuccessOrderList);

// // Daily return cancel order list
// const dailyReturnCancelOrderList = require('../controller/Admin/dailyReturnCancelOrderList');
// adminRouter.get("/DailyReturnCancelOrderList", dailyReturnCancelOrderList);

// // All pending order list
// const allPendingOrderList = require('../controller/Admin/allPendingOrderList');
// adminRouter.get("/GetAllPendingOrderList", allPendingOrderList);

// // All process order list
// const allProcessOrderList = require('../controller/Admin/allProcessOrderList');
// adminRouter.get("/GetAllProcessOrderList", allProcessOrderList);

// // All success order list
// const allSuccessOrderList = require('../controller/Admin/allSuccessOrderList');
// adminRouter.get("/GetAllSuccessOrderList", allSuccessOrderList);

// // All cancel order list
// const allCancelOrderList = require('../controller/Admin/allCancelOrderList');
// adminRouter.get("/GetAllCancelOrderList", allCancelOrderList);

// // All return pending order list
// const allReturnPendingOrderList = require('../controller/Admin/allReturnPendingOrderList');
// adminRouter.get("/GetAllReturnPendingOrderList", allReturnPendingOrderList);

// // All return process order list
// const allReturnProcessOrderList = require('../controller/Admin/allReturnProcessOrderList');
// adminRouter.get("/GetAllReturnProcessOrderList", allReturnProcessOrderList);

// // All return success order list
// const allReturnSuccessOrderList = require('../controller/Admin/allReturnSuccessOrderList');
// adminRouter.get("/GetAllReturnSuccessOrderList", allReturnSuccessOrderList);

// // All return cancel order list
// const allReturnCancelOrderList = require('../controller/Admin/allReturnCancelOrderList');
// adminRouter.get("/GetAllReturnCancelOrderList", allReturnCancelOrderList);

// // All blog post upload
// const blogPostUpload = require('../controller/Admin/blogPostUpload');
// adminRouter.post("/BlogPostUpload", avatarUpload, blogPostUpload);

// // All blog post upload list
// const listOfBlogPost = require('../controller/Admin/listOfBlogPost');
// adminRouter.get("/ListOfBlogPost", listOfBlogPost);

// // Submit notice
// const submitNotice = require('../controller/Admin/submitNotice');
// adminRouter.post("/SubmitNotice", submitNotice);

// // Submit notice
// const listOfNotice = require('../controller/Admin/listOfNotice');
// adminRouter.get("/ListOfNotice", listOfNotice);

// // Submit feed back
// const submitFeedBack = require('../controller/Admin/submitFeedBack');
// adminRouter.post("/SubmitFeedBack", avatarUpload, submitFeedBack);

// // List of feed back
// const listOfFeedBack = require('../controller/Admin/listOfFeedBack');
// adminRouter.get("/ListOfFeedBack", listOfFeedBack);

// // User order invoice
// const userOrderInvoice = require('../controller/Admin/userOrderInvoice');
// adminRouter.get("/UserOrderInvoice/:invoice", userOrderInvoice);


// // // Common router for update delete
// const Update = require("../commonfun/Update");
// adminRouter.put("/Update", Update);
// const Delete = require("../commonfun/Delete");
// adminRouter.post("/Delete", Delete);
// const getInformationSingle = require("../commonfun/getInformationSingle");
// adminRouter.get("/GetInformationSingle/:tableName&:condition", getInformationSingle);



module.exports = adminRouter;