const { category, categorySub, categoryBrand } = require("../../models");

const getSubCategory = async (req, res, next) => {
    try {
        const listOfCategorySub = await categorySub.findAll({
            order: [['id', 'DESC']],
            attributes: ['id', 'name', 'mobileicon', 'desktopicon'],
            include: [{
                model: categoryBrand,
                attributes: ['id', 'name', 'mobileicon', 'desktopicon'],
            }, {
                model: category,
                attributes: ['id', 'name', 'mobileicon', 'desktopicon']
            }]
        })
            .then((item) => {
                res.json(item);
            })
            .catch((error) => {
                res.json({ errors: [{ result: 'error', msg: error['message'] }] });
            })
    } catch (error) {
        res.status(500).json({ errors: [{ result: 'error', msg: "System failed" }] });
    }
}

module.exports = getSubCategory;
