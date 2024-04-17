const { addSliderAndAds } = require("../../models");

const singleProductDetails = async (req, res, next) => {
    try {
        const junction = await addSliderAndAds.findAll({
            where : {status:"Slider"},
            order: [['id', 'DESC']]
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

