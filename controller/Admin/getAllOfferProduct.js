const { category, categorySub, categoryBrand, product } = require("../../models");

const GetAllOfferProduct = async (req, res, next) => {
    try {
        const junction = await product.findAll({
            // attributes: ['id'],
            where: { status: "Offer" },
            order: [['id', 'DESC']],
            include: [{
                model: category,
                attributes: ['name'],
            }, {
                model: categorySub,
                attributes: ['name'],
            }, {
                model: categoryBrand,
                attributes: ['name'],
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

module.exports = GetAllOfferProduct;
