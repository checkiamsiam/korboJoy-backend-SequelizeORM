const { category, categorySub, categoryBrand, product, agent } = require("../../models");

const GetFlashSalesProductData = async (req, res, next) => {
    try {
        const junction = await product.findAll({
            // attributes: ['id'],
            where: { status: "FlashSales" },
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

module.exports = GetFlashSalesProductData;
