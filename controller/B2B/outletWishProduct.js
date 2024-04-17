const { agent,product } = require("../../models");

const outletWishProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const junction = await agent.findAll({
            order: [['id', 'DESC']],
            where: { id: id },
            include:[{
                model : product,
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

module.exports = outletWishProduct;

