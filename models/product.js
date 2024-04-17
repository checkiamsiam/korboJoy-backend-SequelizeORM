module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define("product", {
        catagoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        subCatagoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        brandId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brandCode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        buyPrice: {
            type: DataTypes.DOUBLE(22, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "You do not set product real price"
                }
            }
        },
        salesPrice: {
            type: DataTypes.DOUBLE(22, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "You do not set product buy price"
                }
            }
        },
        price: {
            type: DataTypes.DOUBLE(22, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "You do not set product buy price"
                }
            }
        },
        agentCommission: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
        },
        img: {
            type: DataTypes.TEXT('LONGTEXT'),
            allowNull: true,
        },
        shortDescription: {
            type: DataTypes.TEXT('LONGTEXT'),
            allowNull: true,
        },
        fullDescription: {
            type: DataTypes.TEXT('LONGTEXT'),
            allowNull: true,
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        productOwner: {
            type: DataTypes.ENUM,
            allowNull: true,
            values: ['Admin', 'Agent', 'SubAgent', 'Vendor']
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Offer', 'FlashSales', 'Reguler']
        },
        productType: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Reguler', 'Package']
        },
        offerAmount: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
        },
        discountAmount: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
        },
        cashBackAmount: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
        },
        productDeliveryCharge: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
        },
        chk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: "1"
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
    product.associate = (models) => {
        // Join with category one to many
        product.belongsTo(models.category, {
            foreignKey: 'catagoryId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
        // Join with categorySub one to many
        product.belongsTo(models.categorySub, {
            foreignKey: 'subCatagoryId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });

        // Join with categoryBrand one to many
        product.belongsTo(models.categoryBrand, {
            foreignKey: 'brandId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });

        // Join with product one to many
        product.belongsTo(models.categoryBrand, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
    }

    return product;
};