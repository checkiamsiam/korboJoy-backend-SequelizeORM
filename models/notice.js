module.exports = (sequelize, DataTypes) => {
    const notice = sequelize.define("notice", {
        subject: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        shortDiscriptions: {
            type: DataTypes.TEXT('LONGTEXT'),
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

    return notice;
};