const { member,memberDetails } = require("../../models");
const jwt = require("jsonwebtoken")
const createError = require("http-errors")
const GetProductData = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!(username && password)) {
            res.status(500).json({ result: 'error', msg: 'All input is required'});
        }
        const user = await member.findOne({
            where: { userLog: username, password: password },
            include:{
				model : memberDetails
			}
        })
        console.log(user.memberDetail.name);
        if ((user.password == password) && (user.userLog == username)) {
            // Create token
            const userObject = {
                userId: user.id,
                userLog: user.userLog,
				name: user.memberDetail.name,
				number: user.memberDetail.number,
				email: user.memberDetail.email,
				img: user.memberDetail.img,
				permanentaddress: user.memberDetail.permanentaddress,
                role: "user"
            }
            const token = jwt.sign(
                userObject,
                process.env.TOKEN_KEY,
                {
                    expiresIn: "1d",
                }
            );
            res.setHeader('jwt', token, { httpOnly: true, secure: true, maxAge: 3600000 })
            res.json(token);
        }

    } catch (error) {
        res.status(500).json({ result: 'error', msg: error['message'] });
    }
}

module.exports = GetProductData;
