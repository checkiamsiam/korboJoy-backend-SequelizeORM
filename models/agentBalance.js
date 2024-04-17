module.exports = (sequelize, DataTypes) => {
    const agentBalance = sequelize.define("agentBalance", {
        agentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        balanceIn: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        },
        balanceOut: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        },
        balance: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
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
    agentBalance.associate = (models) => {
        // Join with agent one to one
        agentBalance.belongsTo(models.agent, {
            foreignKey: 'agentId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
    }

    return agentBalance;
};