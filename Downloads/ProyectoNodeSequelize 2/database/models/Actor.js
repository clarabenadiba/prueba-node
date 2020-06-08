module.exports = (sequelize, dataTypes) =>{

    let alias = 'Actor';
    let cols = {
        id:{
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true  
        } ,
        last_name: {
          type: dataTypes.STRING
        },
        first_name: {
            type: dataTypes.STRING
          },
        rating: {
            type: dataTypes.DECIMAL
        }
       
    };

    let config = {
        timestamps: true
    };


const Actor = sequelize.define(alias, cols, config);
    return Actor;
}