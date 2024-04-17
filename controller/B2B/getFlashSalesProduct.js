const { product } = require("../../models");
const recentProduct = async (req, res, next) => {
    try {
        const junction = await product.findAll({
            where:{status:"FlashSales"},
            order: [['id', 'DESC']],
        })
            .then((item) => {
                res.json(item);
            })
            .catch((error) => {
                res.status(500).json({ result: 'error', msg: error['message'] });
            })

    } catch (error) {
        res.status(500).json({ result: 'error', msg: error['message'] });
    }
}

module.exports = recentProduct;

