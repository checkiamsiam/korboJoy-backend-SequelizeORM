const { product, category } = require("../../models");
const categoryAllProduct = async (req, res, next) => {
    try {
        const { catId } = req.params
        const junction = await category.findAll({
            where: { id: catId },
            order: [['id', 'DESC']],
            include: [{
                model: product
            }],
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

module.exports = categoryAllProduct;

