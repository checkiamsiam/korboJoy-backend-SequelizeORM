const express = require("express");
var morgan = require("morgan");
var cookieParser = require("cookie-parser");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan("common"));
app.use(cors());
app.use(cookieParser());
// Database  model
const db = require("./models");

// Index Router
app.get("/", (req, res) => {
    res.send("hello");
});

const adminRouter = require("./router/adminRouter");
const ecommerceRouter = require("./router/ecommerceRouter");
const B2BRouter = require("./router/b2BRouter");

app.use(adminRouter);
app.use(ecommerceRouter); 
app.use(B2BRouter); 

var ip = require("ip");
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(ip.address());
        console.log(`Server running on ports  ${port}`); 
    });
}); 
