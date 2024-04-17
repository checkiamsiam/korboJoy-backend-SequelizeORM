module.exports = (sequelize, DataTypes) => {
    const agentOrder = sequelize.define("agentOrder", {
        agentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        invoiceNumber: {
            type: DataTypes.BIGINT,
            allowNull: false,
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
                    msg: "Your amount is too low"
                }
            }
        },
        salesPrice: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        },
        totalPrice: {
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
    agentOrder.associate = (models) => {
        // Join with agent one to one
        agentOrder.belongsTo(models.agent, {
            foreignKey: 'agentId',
            constraints: false,
        });
    }

    return agentOrder;
};