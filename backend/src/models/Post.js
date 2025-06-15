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
        Post.belongsTo(models.User,
            {
                foreignKey: 'author_id',
                as: 'author'
            }
        );
        Post.belongsToMany(models.Tags,
            {
                through: 'PostTags',
                foreignKey: 'post_id',
                as: 'tags'
            }
        );
        Post.belongsToMany(models.Categories,
            {
                through: 'PostCategories',
                foreignKey: 'post_id',
                otherKey: 'category_id',
                as: 'categories'
            });
        Post.hasMany(models.Comments,
            {
                foreignKey: 'post_id',
                as: 'comments'
            }
        );
    };

    return Post;
};