module.exports = (sequelize , DataTypes) => {
    const Classes = sequelize.define("classes" , {

        id:
        {
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true
        },

        classname:
        {
            type:DataTypes.STRING,
            allowNull:false
        }

    })

    return Classes

}