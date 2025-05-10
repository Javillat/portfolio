
export default (sequelize, DataTypes) => {
    const Category = sequelize.define('Categories', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        freezeTableName: true,
    });
    Category.associate = (models) => {
        Category.hasMany(models.Posts, { foreignKey: 'categoryId' });
    };
    return Category;
};