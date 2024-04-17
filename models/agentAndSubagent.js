module.exports = (sequelize, DataTypes) => {
    const agent = sequelize.define("agent", {
        agentType: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Agent', 'SubAgent', 'Vendor']
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        sponsorId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        number: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        presentAddress: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        permanentAddress: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        division: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        district: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        upazila: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        companyName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        officeAddress: {
            type: DataTypes.TEXT('LONGTEXT'),
            allowNull: true,
        },
        nidNumber: {
            type: DataTypes.INTEGER(50),
            allowNull: true,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        commission: {
            type: DataTypes.DOUBLE(20, 2),
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
    agent.associate = (models) => {
        // Join with agentBalance one to one
        agent.hasOne(models.agentBalance, {
            foreignKey: 'agentId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
        // Join with agentOrderDetails one to many
        agent.hasMany(models.agentOrderDetails, {
            foreignKey: 'agentId',
            constraints: false,
        });

        // Join with agentOrder one to many
        agent.hasMany(models.agentOrder, {
            foreignKey: 'agentId',
            constraints: false,
        });

        // Join with agentOrder one to many
        agent.hasMany(models.product, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            constraints: false,
        });
    }

    return agent;
};