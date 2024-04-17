module.exports = (sequelize, DataTypes) => {
    const categorySub = sequelize.define("categorySub", {
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
        name: {
            type: DataTypes.STRING(50),
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Please enter your sub category name"
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
    }, {
        timestamps: false,
        freezeTableName: true
    });
    categorySub.associate = (models) => {
        // Join with category one to many
        categorySub.belongsTo(models.category, {
            foreignKey: 'categoryId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
        // Join with categoryBrand one to many
        categorySub.hasMany(models.categoryBrand, {
            foreignKey: 'categorySubId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
        // Join with product one to many
        categorySub.hasMany(models.product, {
            foreignKey: 'subCatagoryId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
    }

    return categorySub;
};