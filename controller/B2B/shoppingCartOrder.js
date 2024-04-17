const { order, orderDetails, sequelize } = require("../../models");

const shoppingCartOrder = async (req, res, next) => {
    try {
        const { Outlet, orderType, phone, firstname, effectiveDelivery, City, State, country, streetaddress,pay_mode,shipping_mode,order_type } = req.body.userInfo
        
		let t;
        t = await sequelize.transaction();
        const deliveryDetails = { name: firstname, number: phone, city: City, State: State, country: country, streetaddress: streetaddress, effectiveDelivery: effectiveDelivery };
        var json = JSON.stringify(deliveryDetails);
        const ip = req._remoteAddress;
        var totalQty = 0; 
        var totalPrice = 0;
        var totalProduct = 0;
        const productList = req.body.productInfo;
        const cartProductInfo = req.body.cartInfo;
        const userLogInfo = req.body.logInfo;
        const invoiceSerila = await orderDetails.count();
        const orderTypes = orderType;
        var userId = userLogInfo.userId;
        Object.entries(cartProductInfo).map(([key, value]) => {
            const greaterThanTen = productList[key].filter(element => element.id == key);
            var totalProductPrice = (productList[key][2] * value);
            var totalProductQty = (value)
            totalQty += totalProductQty;
            totalPrice += totalProductPrice;
            totalProduct += 1;
            var singleOrder = order.create({ user_id:userId,vendor_id:Outlet,invoice_num: invoiceSerila, product_id: productList[key],buy_price:totalProductPrice,sell_price:totalProductPrice, qty: totalProductQty, total_buy_price: totalProductPrice,total_sell_price:totalProductPrice }, { transaction: t });
        });
        
        const insertOrderDetails = await orderDetails.create({ invoice: invoiceSerila,user_id: userId,outlet_id:Outlet,user_details:json,  productcount: totalProduct, total_qty: totalQty, total_buy_price: totalPrice, total_sell_price: totalPrice, shipping_mode: shipping_mode, pay_mode: pay_mode,order_type:order_type }, { transaction: t })
            .then((item) => {
                t.commit();
                res.status(200).json({ result: 'success', msg: 'Your order successfully', item: item });
            })
            .catch((error) => {
                t.rollback();
                res.status(500).json({ result: 'error', msg: error['message'] });
            })
    } catch (error) {
        res.status(500).json({ result: 'error', msg: error['message'] });
    }
}

module.exports = shoppingCartOrder;

