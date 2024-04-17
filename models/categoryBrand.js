module.exports = (sequelize, DataTypes) => {
    const categoryBrand = sequelize.define("categoryBrand", {
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Select category id"
                }
            }
        },
        categorySubId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Select sub category id"
                }
            }
        },
        name: {
            type: DataTypes.STRING(50),
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Please enter your brand name"
                }
            }
        },
        mobileicon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        desktopicon: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        brandicon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        chk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: "1"
        }
    },
        {
            timestamps: false,
            freezeTableName: true
        })

    categoryBrand.associate = (models) => {
        // Join with category one to many
        categoryBrand.belongsTo(models.category, {
            foreignKey: 'categoryId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
        // Join with categorySub one to many
        categoryBrand.belongsTo(models.categorySub, {
            foreignKey: 'categorySubId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });

        // Join with product one to many
        categoryBrand.hasMany(models.product, {
            foreignKey: 'brandId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
    }

    return categoryBrand;
};