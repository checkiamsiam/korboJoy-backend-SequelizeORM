const {cart} = require("../../models");

const deleteShoppingCartInfo = async (req, res, next) => {
    try {
        const { id } = req.params;

        const junction = await cart.destroy({
            where : {id:id},
        })
            .then((item) => {
                res.status(200).json({ result: 'success', msg: 'Your item delete successfully'});
            })
            .catch((error) => {
                res.status(500).json({ result: 'error', msg: error['message'] });
            })

    } catch (error) {
        res.status(500).json({ result: 'error', msg: error['message'] });
    }
}

module.exports = deleteShoppingCartInfo;

