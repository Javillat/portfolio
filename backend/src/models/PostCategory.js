
export default (sequelize, DataTypes) => {
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
        PostCategory.belongsTo(models.Posts, { foreignKey: 'post_id' });
        PostCategory.belongsTo(models.Categories, { foreignKey: 'category_id' });
    };

    return PostCategory;
}