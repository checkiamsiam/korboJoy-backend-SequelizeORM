const { category, product } = require("../../models");
const getCategoryWishProduct = async (req, res, next) => {

    try {
        const junction = await category.findAll({
            order: [['id', 'DESC']],
            include: [{
                model: product,
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

module.exports = getCategoryWishProduct;

