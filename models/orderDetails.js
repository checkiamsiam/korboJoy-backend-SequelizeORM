module.exports = (sequelize, DataTypes) => {
    const orderDetails = sequelize.define("orderDetails", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
            allowNull: false, validate: {
                min: {
                    args: [0],
                    msg: "Your balance is too low"
                }
            }
        },
        totalSalesPrice: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false, validate: {
                min: {
                    args: [0],
                    msg: "Your balance is too low"
                }
            }
        },
        charge: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false, validate: {
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
        deliveryDetails: {
            type: DataTypes.TEXT('LONGTEXT'),
            allowNull: true,
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

    orderDetails.associate = (models) => {
        // Join with member one to many
        orderDetails.belongsTo(models.member, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });

        // Join with order one to many
        orderDetails.hasMany(models.order, {
            foreignKey: 'invoiceNumber',
            constraints: false,
        });
    }
    return orderDetails;
};