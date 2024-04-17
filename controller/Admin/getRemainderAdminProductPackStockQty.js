const { category, categorySub, categoryBrand, product, productStockQty } = require("../../models");
const { Op } = require("sequelize");

const getRemainderAdminProductPackStockQty = async (req, res, next) => {
    try {
        const junction = await product.findAll({
            where: {
                [Op.and]: [{ productOwner: 'Admin' }, { productType: 'Package' }, {
                    qty: {
                        [Op.lte]: 10
                    }
                }]
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

module.exports = getRemainderAdminProductPackStockQty;

