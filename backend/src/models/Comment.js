
export default (sequelize, DataTypes) => {
    const Comments = sequelize.define('Comments', {
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
    Comments.associate = (models) => {
        Comments.belongsTo(models.Posts, { foreignKey: 'post_id', as: 'post' });
        Comments.belongsTo(models.User, { foreignKey: 'user_id' });
    //     Comment.belongsTo(Comments, { foreignKey: 'parent_id', as: 'parentComment' });
    //     Comment.hasMany(Comments, { foreignKey: 'parent_id', as: 'replies' });
     };
    return Comments;
};