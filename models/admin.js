module.exports = (sequelize, DataTypes) => {
    const admin = sequelize.define("admin", {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adminType: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['SuperAdmin', 'SubAdmin', 'Account']
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        number: {
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
    },
        {
            timestamps: false,
            freezeTableName: true
        });
    return admin;
};