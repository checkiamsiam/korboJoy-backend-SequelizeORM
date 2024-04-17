module.exports = (sequelize, DataTypes) => {
    const agentOrderDetails = sequelize.define("agentOrderDetails", {
        agentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        invoiceNumber: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        totalProduct: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Must be order 1 product"
                }
            }
        },
        totalQty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Must be order 1 qty"
                }
            }
        },
        totalBuyPrice: {
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
        previousBalance: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
        },
        payBalance: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
        },
        currentBalance: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true
        },
        orderType: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['order', 'return']
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['pending', 'process', 'success', 'cancel']
        },
        approveDate: {
            type: DataTypes.DATE,
            allowNull: true,
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
    agentOrderDetails.associate = (models) => {
        // Join with agent one to one
        agentOrderDetails.belongsTo(models.agent, {
            foreignKey: 'agentId',
            constraints: false,
        });
    }

    return agentOrderDetails;
};