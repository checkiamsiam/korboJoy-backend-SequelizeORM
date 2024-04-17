const { category, categorySub, categoryBrand } = require("../../models");

const getCategoryData = async (req, res, next) => {
    try {
        const listOfCategory = await category.findAll({
            order: [['id', 'DESC']],
            attributes: ['id', 'name', 'mobileicon', 'desktopicon', 'brandicon'],
            include: [{
                model: categorySub,
                attributes: ['id', 'name', 'mobileicon', 'desktopicon', 'brandicon'],
                include: [{
                    model: categoryBrand,
                    attributes: ['id', 'name', 'mobileicon', 'desktopicon', 'brandicon']
                }]
            }]
        })
            .then((item) => {
                res.json(item);
            })
            .catch((error) => {
                res.status(500).json({ result: 'error', msg: error.original['message'] });
            })
    } catch (error) {
        res.status(500).json({ result: 'error', msg: error.original['message'] });
    }
}

module.exports = getCategoryData;
