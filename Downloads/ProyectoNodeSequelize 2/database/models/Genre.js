module.exports = (sequelize, dataTypes) =>{

    let alias = 'Genre';
    let cols = {
        id:{
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true  
        } ,
        name: {
          type: dataTypes.STRING
        },
        ranking: {
            type: dataTypes.INTEGER
        }
       
    };

    let config = {
        timestamps: true
    };


const Genre = sequelize.define(alias, cols, config);
    return Genre;
}