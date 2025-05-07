
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comments', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        parent_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        is_approved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    }, {
        freezeTableName: true,
    });
    Comment.associate = (models) => {
        Comment.belongsTo(models.Post, { foreignKey: 'post_id' });
        Comment.belongsTo(models.User, { foreignKey: 'user_id' });
        Comment.belongsTo(Comment, { foreignKey: 'parent_id', as: 'parentComment' });
        Comment.hasMany(Comment, { foreignKey: 'parent_id', as: 'replies' });
    };
    return Comment;
};