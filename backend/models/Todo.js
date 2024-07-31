const TodoList = (sequelize, DataTypes) => {
    
    const Todo = sequelize.define(
        'todo',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            done: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaulteValue: false
            }
        }
    )

    return Todo;
}


module.exports = TodoList;