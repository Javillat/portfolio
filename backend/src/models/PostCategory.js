
module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
    }, {
        freezeTableName: true,
    });

    PostCategory.associate = (models) => {
        PostCategory.belongsTo(models.Post, { foreignKey: 'post_id' });
        PostCategory.belongsTo(models.Category, { foreignKey: 'category_id' });
    };

    return PostCategory;
}