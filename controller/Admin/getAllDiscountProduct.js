const { category, categorySub, categoryBrand, product } = require("../../models");
const { Op } = require("sequelize");
const GetDiscountProductData = async (req, res, next) => {
    try {
        const junction = await product.findAll({
            // attributes: ['id'],
            where: {
                discountAmount: { [Op.ne]: 0 }
            },
            order: [['id', 'DESC']],
            include: [{
                model: category,
                attributes: ['name']
            }, {
                model: categorySub,
                attributes: ['name']
            }, {
                model: categoryBrand,
                attributes: ['name']
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

module.exports = GetDiscountProductData;
