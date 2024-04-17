module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define("order", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        invoiceNumber: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        productId: {
            type: DataTypes.BIGINT,
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
                    msg: "Your balance is too low"
                }
            }
        },
        salesPrice: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Your balance is too low"
                }
            }
        },
        toatlSalePrice: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Your balance is too low"
                }
            }
        },
        charge: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Your balance is too low"
                }
            }
        },
        orderType: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['order', 'return']
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

    order.associate = (models) => {
        // Join with member one to many
        order.belongsTo(models.member, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });

        // Join with orderDetails one to many
        order.belongsTo(models.orderDetails, {
            foreignKey: 'invoiceNumber',
            constraints: false,
        });
    }
    return order;
};  