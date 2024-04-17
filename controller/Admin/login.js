const { admin } = require("../../models");
var jwt = require('jsonwebtoken');
const Login = async (req, res, next) => {
    try {
        const { userId, password } = req.body;

        if (!(userId && password)) {
            res.status(400).send("All input is required");
        }

        const user = await admin.findOne({
            where: { userId: userId, password: password }
        })

        if ((password == user.password) && (userId == user.userId)) {

            const userObject = {
                userId: user.id,
                adminType: user.adminType,
                userName: user.name,
                role: "Admin"
            }

            const token = jwt.sign(
                userObject,
                "jdkasjdkljaskldjakls",
                {
                    expiresIn: "1d",
                }
            );
            res.status(200).json(token);

        } else {
            res.status(400).json({
                error: "Invalid Credentials"
            });
        }
    } catch (err) {
        res.status(400).json({
            error: "data do not submit"
        });
    }

}

module.exports = Login;