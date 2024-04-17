module.exports = (sequelize, DataTypes) => {
    const productStockQtyRecord = sequelize.define("productStockQtyRecord", {
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
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: DataTypes.NOW
        }
    },
        {
            timestamps: false,
            freezeTableName: true
        });

    return productStockQtyRecord;
};