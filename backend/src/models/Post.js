export default (sequelize, DataTypes) => {
    const Post = sequelize.define('Posts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        excerpt: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        views: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        status: {
            type: DataTypes.ENUM('draft', 'published'),
            defaultValue: 'draft',
        },
        is_featured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        freezeTableName: true,
    });
    Post.associate = (models) => {
        Post.belongsTo(models.User, { foreignKey: 'author_id' });
        Post.belongsToMany(models.Tags, { through: 'PostTags', foreignKey: 'post_id' });
        Post.belongsTo(models.Categories, { foreignKey: 'categoryId' });
        Post.hasMany(models.Comments, { foreignKey: 'post_id' });
    };
    return Post;
};