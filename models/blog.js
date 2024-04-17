module.exports = (sequelize, DataTypes) => {
    const blog = sequelize.define("blog", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shortDis: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fullDis: {
            type: DataTypes.TEXT('LONGTEXT'),
            allowNull: true,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        chk: {
            type: DataTypes.INTEGER,
            allowNull: true,
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

    return blog;
};