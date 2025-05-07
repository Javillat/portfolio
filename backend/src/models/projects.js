const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Projects', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        thumbnail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stack: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        github_url: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true
            },
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM("in progress", "completed"),
            defaultValue: "in progress",
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isURL: true,
            },
            allowNull: false,
        },
    }, { freezeTableName: true });
};