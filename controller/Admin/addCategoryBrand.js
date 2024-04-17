const { categoryBrand } = require("../../models");
const addCategoryBrand = async (req, res, next) => {
    try {
        const { categoryId, categorySubId, name } = req.body;
        const mobileicon = req.files[0].filename;
        const desktopicon = req.files[1].filename;
        const brandicon = req.files[2].filename;
        const CategoryBrand = await categoryBrand.create({ categoryId: categoryId, categorySubId: categorySubId, name: name, mobileicon: mobileicon, desktopicon: desktopicon, brandicon: brandicon })
            .then((item) => {
                res.status(200).json({ result: 'success', msg: 'Your brand add successfully', item: item });
            })
            .catch((error) => {
                res.status(500).json({ result: 'error', msg: error['message'] });
            })
    } catch (error) {
        res.status(500).json({ result: 'error', msg: error['message'] });
    }
}

module.exports = addCategoryBrand;
