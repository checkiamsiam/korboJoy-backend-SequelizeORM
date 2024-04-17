const { product, productStockQty, rel_cat_subcat_brand_product, sequelize } = require("../../models");
const AddProduct = async (req, res, next) => {
    try {
        const { catagoryId, subCatagoryId, brandId, productName, productCode, productQty, buyPrice, salesPrice, price, agentCommission, img, shortDescription, fullDescription, userId, productOwner, status, productType, discountAmount, cashBackAmount, productDeliveryCharge } = req.body;

        const imgs = []
        for (i = 0; i < req.files.length; i++) {
            imgs.push(req.files[i].filename);
        }
        const imgfile = JSON.stringify(imgs);
        //insert product information
        const CreateProduct = await product.create({ catagoryId: catagoryId, subCatagoryId: subCatagoryId, brandId: brandId, name: productName, brandCode: productCode, qty: productQty, buyPrice: buyPrice, salesPrice: salesPrice, price: price, agentCommission: agentCommission, img: imgfile, shortDescription: shortDescription, fullDescription: fullDescription, userId: userId, productOwner: productOwner, status: status, productType: productType, discountAmount: discountAmount, cashBackAmount: cashBackAmount, productDeliveryCharge: productDeliveryCharge })
            .then((item) => {
                res.json({ success: [{ result: 'Your product add successfully', msg: item }] });
            })
            .catch((error) => {
                res.status(500).json({ result: 'error', msg: error['message'] });
            })
    } catch (error) {
        res.status(500).json({ result: 'error', msg: error['message'] });
    }
}

module.exports = AddProduct;
