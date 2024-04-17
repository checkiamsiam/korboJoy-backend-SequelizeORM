module.exports = (sequelize, DataTypes) => {
    const balance = sequelize.define("balance", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalInAmount: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        },
        totalOutAmount: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        },
        balance: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: true,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        }
    },
        {
            timestamps: false,
            freezeTableName: true
        });
    balance.associate = (models) => {
        // Join with member one to one
        balance.belongsTo(models.member, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
    }

    return balance;
};