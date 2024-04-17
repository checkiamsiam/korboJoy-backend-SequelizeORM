module.exports = (sequelize, DataTypes) => {
    const inquery = sequelize.define("inquery", {
        userId: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        shortDiscriptions: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        replay: {
            type: DataTypes.TEXT('LONGTEXT'),
            allowNull: true,
        },
        imgs: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['pendding']
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

    return inquery;
};