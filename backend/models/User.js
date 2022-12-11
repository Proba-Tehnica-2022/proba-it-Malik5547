module.exports = (sequelize, DataTypes) => {
    const  User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        username: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING(60),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    return User;
};