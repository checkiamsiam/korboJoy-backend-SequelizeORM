module.exports = (sequelize, DataTypes) => {
    const memberDetails = sequelize.define("memberDetails", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        permanentaddress: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        districts: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        division: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Blood: {
            type: DataTypes.STRING,
            allowNull: true,
        }

    },
        {
            timestamps: false,
            freezeTableName: true
        });

    memberDetails.associate = (models) => {
        // Join with memberDetails one to one
        memberDetails.belongsTo(models.member, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
    }

    return memberDetails;
};