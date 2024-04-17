const { blog } = require("../../models");
const recentAllBlog = async (req, res, next) => {
    try {
        const junction = await blog.findAll({
            order: [['id', 'DESC']],
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

module.exports = recentAllBlog;

