const { addSliderAndAds } = require("../../models");

const getSliderAndAds = async (req, res, next) => {
    try {
        const listOfSliderAndAds = await addSliderAndAds.findAll({
            order: [['id', 'DESC']],
            where: { chk: 1 },
            attributes: ['id', 'title', 'shortDiscription', 'img', 'status']
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

module.exports = getSliderAndAds;
