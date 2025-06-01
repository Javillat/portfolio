export default (sequelize, DataTypes) => {
    const Tags = sequelize.define('Tags', {
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
    }, {
        freezeTableName: true,
    });

    Tags.associate = (models) => {
        Tags.belongsToMany(models.Posts, { through: 'PostTags', foreignKey: 'tag_id', otherKey: 'post_id', as: 'posts' });
    };

    return Tags;
};