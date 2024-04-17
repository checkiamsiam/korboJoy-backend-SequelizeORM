const {cart} = require("../../models");

const deleteShoppingCartInfo = async (req, res, next) => {
    try {
        const { id,salesPrice,qty } = req.body;
        const findProduct = await cart.count({where : {id:id}})
        const totalPrice = salesPrice*qty;
        if(findProduct>0){
            const updateInfo = await cart.update({ qty: qty,totalSalesPrice:totalPrice }, { where: { id: id } })
            .then((item) => {
                res.status(200).json({ result: 'success', msg: 'Update product qty'});
            })
            .catch((error) => {
                res.json({ errors: [{ result: 'error', msg: error['message'] }] });
            })
        }
    } catch (error) {
        res.status(500).json({ result: 'error', msg: error['message'] });
    }
}

module.exports = deleteShoppingCartInfo;

