const { product,category,categorySub,categoryBrand } = require("../../models");
const { Op } = require("sequelize");

const singleProductDetails = async (req, res, next) => {
    try {
        const { id } = req.params
        const junction = await product.findAll({
            order: [['id', 'DESC']],
            where: { id: id },
            include:[{
				model:category,
                attributes: ['name']
			},{
				model : categorySub,
                attributes: ['name']
			},{
				model : categoryBrand,
                attributes: ['name']
			}]
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

module.exports = singleProductDetails;

