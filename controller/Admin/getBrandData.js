const { category, categorySub, categoryBrand } = require("../../models");

const getBrandData = async (req, res, next) => {
    try {
        const listOfBrand = await categoryBrand.findAll({
            order: [['id', 'DESC']],
            attributes: ['id', 'name', 'mobileicon', 'desktopicon'],
            include: [{
                model: category,
                attributes: ['id', 'name', 'mobileicon', 'desktopicon'],
            }, {
                model: categorySub,
                attributes: ['id', 'name', 'mobileicon', 'desktopicon']
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

module.exports = getBrandData;
