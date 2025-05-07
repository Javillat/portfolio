
module.exports = (sequelize, DataTypes) => {
    const PostTags = sequelize.define('PostTags', {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
    }, {
        freezeTableName: true,
    });
    PostTags.associate = (models) => {
        PostTags.belongsTo(models.Post, { foreignKey: 'post_id' });
        PostTags.belongsTo(models.Tags, { foreignKey: 'tag_id' });
    };
    return PostTags;
};