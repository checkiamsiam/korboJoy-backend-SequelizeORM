module.exports = (sequelize, DataTypes) => {
    const member = sequelize.define("member", {
        userLog: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountType: {
            type: DataTypes.STRING,
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

    }, {
        timestamps: false,
        freezeTableName: true
    });

    member.associate = (models) => {
        // Join with memberDetails one to one
        member.hasOne(models.memberDetails, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
        // Join with balance one to one
        member.hasOne(models.balance, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
        // Join with orderDetails one to many
        member.hasMany(models.orderDetails, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });

        // Join with order one to many
        member.hasMany(models.order, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
    }

    return member;
}; 