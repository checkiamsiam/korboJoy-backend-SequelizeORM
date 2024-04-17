const { order, orderDetails,cart } = require("../../models");

const shoppingCartOrder = async (req, res, next) => {
    try {
        const { name,number,address,localTown,addressType,userId } = req.body;
        var date_ob = new Date();
        var day = ("0" + date_ob.getDate()).slice(-2);
        var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        var year = date_ob.getFullYear();
        var date = year + "-" + month + "-" + day;

        const deliveryDetails = { name: name, number: number, localTown: localTown, addressType: addressType, address: address};
        var json = JSON.stringify(deliveryDetails);
        var totalQty = 0; 
        var totalBuyPrice = 0;
        var totalSalesPrice = 0;
        var totalProduct = 0;
        var charge = 0;
        var orderType = 0;

        const invoiceSerila = await orderDetails.count();

        const getCartInformation = await cart.findAll({ where : {userId:userId} })
        .then((item) => {
            Object.entries(item).map(([key, value]) => {
                totalProduct+=1;
                totalQty +=value.qty;
                totalBuyPrice +=value.buyPrice;
                totalSalesPrice +=value.totalSalesPrice;
                charge +=value.charge;
                orderType =value.orderType;
                
                var singleOrder = order.create({ userId:userId,invoiceNumber: invoiceSerila, productId:value.productId,qty: value.qty,buyPrice:value.buyPrice,salesPrice:value.buyPrice,toatlSalePrice: value.totalSalesPrice,charge:value.charge,orderType:value.userType })
            })
            const insertOrderDetails = orderDetails.create({ userId:userId,invoiceNumber: invoiceSerila,totalProduct: totalProduct, totalQty: totalQty, totalBuyPrice: totalBuyPrice, totalSalesPrice: totalSalesPrice, charge: charge, orderType: orderType,deliveryDetails:json,status:'pending',date:date })
            .then((info)=>{
                const junction = cart.destroy({where : {userId:userId}})
                res.status(200).json({ result: 'success', msg: 'Your order successfully',item:info}); 
            })
        })
        .catch((error) => {
            res.status(500).json({ result: 'error', msg: error['message'] }); 
        })
    } catch (error) {
        res.status(500).json({ result: 'error', msg: error['message'] }); 
    }
}

module.exports = shoppingCartOrder; 

