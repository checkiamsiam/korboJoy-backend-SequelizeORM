module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define("category", {
        name: {
            type: DataTypes.STRING(50),
            unique: true,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Please enter category name"
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
        });
    category.associate = (models) => {
        // Join with categorySub one to many
        category.hasMany(models.categorySub, {
            foreignKey: 'categoryId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
        // Join with categoryBrand one to many
        category.hasMany(models.categoryBrand, {
            foreignKey: 'categoryId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });

        // Join with product one to many
        category.hasMany(models.product, {
            foreignKey: 'catagoryId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
    }
    return category;
};