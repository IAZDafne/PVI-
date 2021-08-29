const { DataTypes,Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING, //cierto numero de palabras 
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, //para cosas mas grandes 
      allowNull: false
    },
    released: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER //numero 
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    background_image: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.STRING,
      allowNull:false
    }
   
  });
};
