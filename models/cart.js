module.exports = (sequelize, DataTypes) => {
    const cart = sequelize.define("cart", {
        userId: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        productId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        ip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        orderType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Must be order 1 qty"
                }
            }
        },
        buyPrice: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        },
        salePrice: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        },
        totalSalesPrice: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        },

        charge: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
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

    return cart;
};