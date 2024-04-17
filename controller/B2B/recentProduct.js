const { product } = require("../../models");
const recentProduct = async (req, res, next) => {
    try {
        const {limits,offsets} = req.params;
        const limit =parseInt(limits);
        const offset =parseInt(offsets);
        const junction = await product.findAll({
            order: [['id', 'DESC']],
            limit: limit,
            offset: offset
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

