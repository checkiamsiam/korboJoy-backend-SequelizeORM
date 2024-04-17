module.exports = (sequelize, DataTypes) => {
    const feedback = sequelize.define("feedback", {
        subject: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        shortDiscriptions: {
            type: DataTypes.TEXT('LONGTEXT'),
            allowNull: true,
        },
        imgs: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        chk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: "0"
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

    return feedback;
};