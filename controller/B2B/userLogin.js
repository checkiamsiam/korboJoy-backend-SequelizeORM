const { agent,agentBalance } = require("../../models");
const jwt = require("jsonwebtoken")
const createError = require("http-errors")
const GetProductData = async (req, res, next) => {
    try {
        const { number, password } = req.body; 
        if (!(number && password)) {
            res.status(500).json({ result: 'error', msg: 'All input is required'});
        }
        const user = await agent.findOne({
            where: { number: number, password: password },
            include:{
				model : agentBalance
			}
        })
        
        if ((user.password == password) && (user.number == number)) {
            // Create token
            const userObject = {
                userId: user.id,
                userLog: user.number,
				name: user.name,
				email: user.email,
				img: user.img,
				presentAddress: user.presentAddress,
				companyName: user.companyName,
				officeAddress: user.officeAddress,
				balance: user.agentBalance.balance,
				balanceIn: user.agentBalance.balanceIn,
				balanceOut: user.agentBalance.balanceOut,
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
