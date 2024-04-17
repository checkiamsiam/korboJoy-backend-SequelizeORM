module.exports = (sequelize, DataTypes) => {
    const agentStockQty = sequelize.define("agentStockQty", {
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        productId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: "0",
            validate: {
                min: {
                    args: [0],
                    msg: "Must be order 1 qty"
                }
            }
        },
    },
        {
            timestamps: false,
            freezeTableName: true
        });

    return agentStockQty;
};