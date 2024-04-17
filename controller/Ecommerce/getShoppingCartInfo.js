const {sequelize } = require("../../models");

const getShoppingCartInfo = async (req, res, next) => {
    try {
        const { userId } = req.params
        const info = await sequelize.query(`select c.id,c.qty,c.salePrice,c.totalSalesPrice,c.charge,c.date,p.name,p.img,p.shortDescription,p.qty as availableqty,p.status from cart as c inner join product as p on c.productId=p.id where c.userId= '${userId}'`, { type: sequelize.QueryTypes.SELECT })
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

module.exports = getShoppingCartInfo;

