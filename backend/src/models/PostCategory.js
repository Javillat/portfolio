
export default (sequelize, DataTypes) => {
    const PostCategories = sequelize.define('PostCategories', {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Posts',
                key: 'id',
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Categories',
                key: 'id',
            },
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    return PostCategories;
}