
export default (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories', {
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
    Categories.associate = (models) => {
        Categories.belongsToMany(models.Posts,
            {
                through: 'PostCategories',
                foreignKey: 'category_id',
                otherKey: 'post_id',
                as: 'posts'
            });
    };
    return Categories;
};