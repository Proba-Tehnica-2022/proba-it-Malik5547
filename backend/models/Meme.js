module.exports = (sequelize, DataTypes) => {
    const  Meme = sequelize.define("Meme", {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    return Meme;
};