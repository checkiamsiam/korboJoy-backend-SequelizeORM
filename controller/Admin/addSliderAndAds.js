const { addSliderAndAds } = require("../../models");
const insertAddSliderAndAds = async (req, res, next) => {
    try {
        const { title, shortDiscriptions, status } = req.body;
        const imgs = req.files[0].filename;
        const CreateAddSliderAndAds = await addSliderAndAds.create({ title: title, shortDiscription: shortDiscriptions, img: imgs, status: status })
            .then((item) => {
                res.status(200).json({ result: 'success', msg: 'Slider add successfully', item: item });
            })
            .catch((error) => {
                res.status(500).json({ result: 'error', msg: error['message'] });
            })
    } catch (error) {
        res.status(500).json({ result: 'error', msg: error['message'] });
    }
}

module.exports = insertAddSliderAndAds;
