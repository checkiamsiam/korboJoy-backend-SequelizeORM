const { member, memberDetails } = require("../../models");
const jwt = require("jsonwebtoken")
const createError = require("http-errors")
const GetProductData = async (req, res, next) => {
    try {
        const { number,accountType, name, password, address } = req.body;

        if (!(number && password && name)) {
            res.status(500).json({ result: 'error', msg: 'All input is required'});
        }

        const user = await member.count({
            where: { userLog: number }
        })
        if (user > 0) {
            res.status(500).json({ result: 'error', msg: 'This number already in our database'});
        } else {
            const userSingin = await member.create({ userLog: number, password: password,accountType:accountType });
            const userSinginDetails = await memberDetails.create({ userId: userSingin.id, name: name, number: number, permanentaddress: address })
                .then((item) => {
                    const userObject = {
                        userId: userSingin.id,
                        userLog: userSingin.userLog,
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
                })
                .catch((error) => {
                    res.status(500).json({ result: 'error', msg: error['message'] });
                })
        }
    } catch (error) {
        res.status(500).json({ result: 'error', msg: error['message'] });
    }
}

module.exports = GetProductData;
