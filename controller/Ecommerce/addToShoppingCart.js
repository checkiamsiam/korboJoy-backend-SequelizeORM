const { product, cart } = require("../../models");

const addToShoppingCart = async (req, res, next) => {
    try {
        const { id, userId, orderType,userType } = req.body;
        const ip = req._remoteAddress;
        const productCount = await product.findOne({ where: { id: id } });
        const cartOrderCount = await cart.count({ where: { productId: id ,userId:userId} })
        if (cartOrderCount > 0) {
            const updateInfo = await cart.increment({ qty: 1,totalSalesPrice:productCount.price }, { where: { productId: id } })
                .then((item) => {
                    res.status(200).json({ result: 'success', msg: 'Add to cart add successfully', item: item });
                })
                .catch((error) => {
                    res.json({ errors: [{ result: 'error', msg: error['message'] }] });
                })
        } else {
            const insertInfo = await cart.create({ userId: userId, productId: id, ip: ip, orderType: orderType,userType:userType,qty: 1, buyPrice: productCount.buyPrice,salePrice: productCount.price,totalSalesPrice: productCount.price,charge: productCount.productDeliveryCharge,  })
                .then((item) => {
                    res.status(200).json({ result: 'success', msg: 'Add to cart add successfully', item: item });
                })
                .catch((error) => { 
                    res.status(500).json({ result: 'error', msg: error['message'] });
                })
        }
    } catch (error) {
        res.status(500).json({ result: 'error', msg: error['message'] });
    }
}

module.exports = addToShoppingCart;

